const http = require("node:http");
const fs = require("node:fs/promises");
const crypto = require('node:crypto');
const {WebSocketServer} = require("ws");

const PORT = 3000;

const sendResponse = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}

const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
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
        })
        req.on('error', (err) => {
            console.error(err);
            reject(err);
        })
    })
}

const readJSON = async(filePath) => {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

const writeJSON = async(filePath, dataJSON) => {
    return await fs.writeFile(filePath, JSON.stringify(dataJSON, null, 4));

}

const validData = (data, fields) => {
    return fields.every(f => typeof data[f] === 'string' && data[f].trim().length > 0);
}

const generateID = (data) => {
    return data.length ? Math.max(...data.map(d => d.id))+1 : 1;
}

const getCookie = (req, name) => {
    const header = req.headers.cookie;
    if(!header) return undefined;
    const cookie = header.split(';').map(c => c.trim()).find(c => c.startsWith(`${name}=`));
    return cookie?.split('=').slice(1).join('=');
}

const authenticate = async (session) => {
    const userId = session.id;
    const userJSON = await readJSON('./user.json'); 
    const user = userJSON.find(u => u.id === userId);
    if(!user) return null;
    console.log("Authenticated & Connected user:", user.userName);
    return user;
}

const getSessionFromRequest = async (req) => {
    console.log("==========New Session==========");
    console.log('Cookie : ', req.headers.cookie);
    const sessionId = getCookie(req, 'sessionId');
    const sessionJSON = await readJSON('./session.json');
    const session = sessionJSON.find(s => s.sessionId === sessionId);
    if(!session) return null;
    return session;
}

const server = http.createServer(async(req, res) => {
    try {
        if(req.method === 'POST' && req.url === '/register') {
            const liveData = await parseBody(req);
            if(!validData(liveData, ['userName', 'password'])) return sendResponse(res, 400, {error : "Invalid Data"});
            const userJSON = await readJSON('./user.json');
            const duplicateUser = userJSON.find(u => u.userName === liveData.userName);
            if(duplicateUser) return sendResponse(res, 400, {error : 'User already exists'});
            const salt = crypto.randomBytes(16).toString('hex');
            const encryptHashPassword = crypto.scryptSync(liveData.password, salt, 64).toString('hex');
            const newUser = {
                id : generateID(userJSON),
                userName : liveData.userName,
                salt : salt,
                hashedPassword : encryptHashPassword,
            }
            userJSON.push(newUser);
            await writeJSON('./user.json', userJSON);
            return sendResponse(res, 201, {message : 'New user added', user : {id : newUser.id, userName : newUser.userName}});
        }

        if(req.method == 'POST' && req.url === '/login') {
            const liveData = await parseBody(req);
            if(!validData(liveData, ['userName', 'password'])) return sendResponse(res, 400, {error : 'Invalid Data'});
            const userJSON = await readJSON('./user.json');
            const user = userJSON.find(u => u.userName === liveData.userName);
            if(!user) return sendResponse(res, 401, {error : 'Invalid Credentials or Register'});
            const decryptHashPassword = crypto.scryptSync(liveData.password, user.salt, 64).toString('hex');
            if(decryptHashPassword !== user.hashedPassword) return sendResponse(res, 401, {error : 'Invalid Credentials'});
            const sessionJSON = await readJSON('./session.json');
            const sessionId = crypto.randomBytes(32).toString('hex');
            const newSession = {
                id : user.id,
                sessionId
            }
            sessionJSON.push(newSession);
            await writeJSON('./session.json', sessionJSON);
            res.setHeader('Set-Cookie', `sessionId=${sessionId}; HttpOnly; SameSite=Strict; Path=/`);
            return sendResponse(res, 200, {message : "Login successful", user : {id : user.id, userName : user.userName}});
        }

        if(req.method == 'PUT' && req.url === '/logout') {
            const sessionId = getCookie(req, 'sessionId');
            if(!sessionId) return sendResponse(res, 401, {error :  'Not Authenticated'});
            const sessionJSON = await readJSON('./session.json');
            const session = sessionJSON.find(s => s.sessionId === sessionId);
            if(!session) return sendResponse(res, 401, {error : 'Invalid Session'});
            const updateSession = sessionJSON.filter(s => s.sessionId !== sessionId);
            await writeJSON('./session.json', updateSession);
            for(const client of clients) {
                if(client.userId === session.id) client.socket.close(1000, 'User logged out');
            }
            res.setHeader('Set-Cookie', 'sessionId=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');
            return sendResponse(res, 200, {message : "Logout successful"});
        }

        return sendResponse(res, 404, {error : 'Route not found'});
    } catch (error) {
        console.error(error);
        return sendResponse(res, 500, {error : "Internal server Issue"});
    }
}).listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}`);
});

// Web Socket --- Multiple Communication
const wss = new WebSocketServer({server});
const clients = new Set();

wss.on('connection', async(socket, req) => {
    const session = await getSessionFromRequest(req);

    if(!session) {
        socket.close();
        return;
    }

    const user = await authenticate(session);

    if(!user){
        socket.close();
        return;
    }

    clients.add({socket, userId : user.id});

    const history = await readJSON('./messages.json');
    socket.send(JSON.stringify(history));

    socket.on('message', async(data) => {
        try {
            let messageObj;
            try {
                messageObj = JSON.parse(data.toString());
            } catch (error) {
                socket.send(JSON.stringify({type : "error", message : "Invalid JSON"}));
                return;
            }
            if(!validData(messageObj, ['message'])) { 
                socket.send(JSON.stringify({type : "error", message : "Invalid Message"}));
                return;
            }
            const messageJSON = await readJSON('./messages.json');
            const newMessage = {
                id : generateID(messageJSON),
                userId : user.id,
                userName : user.userName,
                message : messageObj.message,
                timeStamp : new Date().toISOString()
            }
            messageJSON.push(newMessage);
            await writeJSON('./messages.json', messageJSON);
            for(const client of clients) client.socket.send(JSON.stringify(newMessage));
        } catch (error) {
            console.error(error);
            socket.send(JSON.stringify({type : "error", message : "Internal Server Error"}));
            return;
        }
    });

    socket.on('close', () => {
        const index = clients.findIndex(c => c.socket === socket);
        if(index !== -1) clients.splice(index, 1);
        console.log("Connection ended");
    });

    socket.on('error', (error) => {
        console.error(error);
    });
});

// Handle shutdown
process.on("SIGINT", async () => {
    console.log("Server shutting down...");

    // Tell clients first
    for (const client of clients) {
        const ws = client.socket;

        if (ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify({type: "server_shutdown",message: "Server is shutting down"}));
            ws.close(1001, "Server shutting down");
        }
    }

    wss.close();

    server.close(() => {
        console.log("Server closed.");
        process.exit(0);
    });
});
