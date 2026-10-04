const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const {WebSocketServer} = require("ws");

const PORT = 3000;

const messageFile = path.join(__dirname, "messages.json");

const sendResponse = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}

const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunks) => {
            body += chunks.toString('utf-8');
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
        req.on('error', (err) => {
            console.error(err);
            reject(err)
        })
    })
}

const validData = (data) => {
    return(typeof data.userName === 'string' && typeof data.message === 'string'
        && data.userName.trim().length > 0  && data.message.trim().length >0
    );
}

const getData = async() => {
    const data = await fs.readFile(messageFile, 'utf-8');
    return JSON.parse(data);
}

const getCookie = (req, name) => {
    const header = req.headers.cookie;
    if(!header) return undefined;
    const cookie = header.split(';').map(c => c.trim()).find(c => c.startsWith(`${name}=`));
    return cookie?.split('=').slice(1).join('=');
}

const getSessionData = async() => {
    const data = await fs.readFile('./session.json', 'utf-8');
    return JSON.parse(data);
}

const server = http.createServer(async(req, res) => {
    try {
        if(req.method === 'POST' && req.url === '/message') {
            const liveData = await parseBody(req);
            if(!validData(liveData)) return sendResponse(res, 400, {error : 'Invalid Data'});
            const messageData = await getData();
            const nextId = messageData.length? Math.max(...messageData.map(m => m.id))+1 : 1;
            const newMessage =  {
                id : nextId,
                userName : liveData.userName,
                message : liveData.message,
                timeStamp : new Date().toISOString()
            }
            messageData.push(newMessage);
            await fs.writeFile(messageFile, JSON.stringify(messageData, null , 2));
            return sendResponse(res, 201, {Information : 'Message Saved', message : newMessage})
        }

        if(req.method === 'GET' && req.url === '/messages') {
            const messageData = await getData();
            // const messages = messageData.map(m => (`${m.userName} : ${m.message}`));
            return sendResponse(res, 200, {messages : messageData});
        }

        return sendResponse(res, 404, {error : 'Route not found'});
    } catch (error) {
        console.error(error);
        return sendResponse(res, 500, {error : 'Internal Server Issue'});
    }
}).listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}`);
});

const wss = new WebSocketServer({server});

const clients = new Set();

wss.on('connection', async(endUser) => {
    clients.add(endUser);

    const history = await getData();
    endUser.send(JSON.stringify(history));

    endUser.on('message', async(data) => {
        let messageObj;
        try {
            messageObj = JSON.parse(data.toString());
        } catch (error) {
            return;
        }
        if(!validData(messageObj)) return;
        const messageJSONData = await getData();
        const id = messageJSONData.length ? Math.max(...messageJSONData.map(m => m.id))+1 : 1;
        const newMessage = {
            id,
            userName : messageObj.userName,
            message  : messageObj.message,
            timeStamp : new Date().toISOString()
        }
        messageJSONData.push(newMessage);
        await fs.writeFile(messageFile, JSON.stringify(messageJSONData, null, 2));
        for(const user of clients) user.send(JSON.stringify(newMessage));
    });

    endUser.on('close', () => {
        clients.delete(endUser);
        console.log("Connection closed");
    });
});