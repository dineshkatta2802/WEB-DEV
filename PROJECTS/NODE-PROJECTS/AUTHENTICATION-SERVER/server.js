const http = require('node:http');
const fs = require("node:fs/promises");
const crypto = require("node:crypto");

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
        });
        req.on('error', (err) => {
            reject(err);
        })
    });
}   

const validatingData = (data) => {
    return(typeof data.userName === "string" && typeof data.password === 'string' 
        && data.userName.trim().length >0 && data.password.trim().length > 0);
}

const getUserData = async() => {
    const data = await fs.readFile('./users.json', 'utf-8');
    return JSON.parse(data);
}

const getSessionData = async() => {
    const data = await fs.readFile('./session.json', 'utf-8');
    return JSON.parse(data);
}

const generateID = () => {
    return Math.random().toString(36).substring(2, 10);
}

const server = http.createServer(async(req, res) => {
    try {
        //POST /register
        if(req.method === 'POST' && req.url === '/register') {
            const liveData = await parseBody(req);
            if(!validatingData(liveData)) return sendResponse(res, 400, {error : 'Invalid Data'});
            const userData = await getUserData();
            const duplicateUser = userData.find(u => u.userName === liveData.userName);
            if(duplicateUser) return sendResponse(res, 400, {error : "User already exists"});
            const salt = crypto.randomBytes(16).toString('hex');
            const hashPassword = crypto.scryptSync(liveData.password, salt, 64).toString('hex');
            let nextId = userData.length? Math.max(...userData.map(u => u.id))+1 : 1;
            const newUser = {
                id : nextId,
                userName : liveData.userName,
                passwordHash : hashPassword,
                salt : salt
            }
            userData.push(newUser);
            await fs.writeFile('./users.json', JSON.stringify(userData, null, 2));
            return sendResponse(res, 201, {message : "New User Added", user : {id : newUser.id, userName : newUser.userName}});
        }

        // POST login
        if(req.method === 'POST' && req.url === '/login') {
            const liveData = await parseBody(req);
            const userData = await getUserData();
            const user = userData.find(u => u.userName === liveData.userName);
            if(!user) return sendResponse(res, 401, {error : "No user found"});
            const storeSalt = user.salt;
            const newHashPassword = crypto.scryptSync(liveData.password, storeSalt, 64).toString('hex');
            if(newHashPassword !== user.passwordHash) return sendResponse(res, 401, {error : 'Invalid Credentials'});
            const sessionId = generateID();
            const sessionData = await getSessionData();
            const newSession = {
                userId : user.id,
                sessionId : sessionId
            }
            sessionData.push(newSession);
            await fs.writeFile('./session.json', JSON.stringify(sessionData, null, 2));
            return sendResponse(res, 200, {message : "Login Successful", user : {id : user.id, userName : user.userName}});
        }

        return sendResponse(res, 404, {error : 'Route not found'});
    } catch (error) {
        console.error(error);
        return sendResponse(res, 500, {error : "Internal server issue"});
    }
}).listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
})