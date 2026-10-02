const http = require("node:http");
const fs = require("node:fs/promises");
const {URL} = require("node:url");

const PORT = 3000;

const getRedirectData = async() => {
    const data = await fs.readFile('./redirect.json', 'utf-8');
    return JSON.parse(data);
}

const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on('data', (chunks) => {
            body += chunks.toString('utf-8');
        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                resolve(data);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
        req.on('error', err => {
            console.error(err);
            reject(err);
        });
    })
}

const sendResponse = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}

const validateURL = (url) => {
    if(typeof url !== "string") return false;
    try {
        new URL(url);
        return true
    } catch{
        return false;
    }
}

const generateID = () => {
    return Math.random().toString(36).substring(2, 10);
}

const requestRoute = (req) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url.pathname.split('/').filter(Boolean));
    return url.pathname.split('/').filter(Boolean);
}

const server = http.createServer(async(req, res) => {
    const segments = requestRoute(req);
    
    try { 
        if(req.method === 'POST' &&  segments[0] === 'shorten' && segments.length === 1){
            const data = await parseBody(req);
            if(!validateURL(data.url)) return sendResponse(res, 400, {error : "Invalid  URL"});
            const id = generateID();
            const newObj = {
                id : id,
                url : data.url,
            }
            const redirectData = await getRedirectData();
            redirectData.push(newObj);
            await fs.writeFile('./redirect.json', JSON.stringify(redirectData, null , 2));
            return sendResponse(res, 201, {message : "URL shortened", shortId : id, shortURL : `http://localhost:${PORT}/${id}`})
        }
        if(req.method === 'GET' && segments.length === 1){
            const redirectData = await getRedirectData();
            const originalURL = redirectData.find(rd => rd.id === segments[0]);
            if(!originalURL) return sendResponse(res, 404, {error : "Route not found"});
            sendResponse(res, 302, {message : 'Original URL Found', url : originalURL.url});
        }
        return sendResponse(res, 404, {error : 'Route not Found'});
    } catch (error) {
        console.error(error);
        return sendResponse(res, 500, {error : 'Internal Server Issue'});
    }
}).listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
})