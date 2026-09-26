const http = require("node:http");

const MAX_BODY = 1_000_000;

// Generic response
const sendJSON = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    console.log(data);
    res.end(JSON.stringify(data));
}

// Generic request
const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        let bodySize = 0;
        let settled = false;

        const fail = (error) => {
            if(settled) return;
            settled = true;
            reject(error);
        }

        req.on('data', (chunk) => {
            if(settled) return;
            bodySize += chunk.length;
            if(bodySize > MAX_BODY){
                fail(new Error("Request Body too large"));
                req.destroy();
                return;
            }
            body += chunk.toString();
        });

        req.on('end', () => {
            if(settled) return;
            try {
                const data = JSON.parse(body);
                settled = true;
                resolve(data);
            } catch (error) {
                fail(new Error("Invalid JSON"));
            }
        });

        req.on('error', () => {
            fail(error);
        });
    });
}

const isValidProduct = (product) => {
    return (product && typeof product.name === 'string' && product.price === 'number' && product.price >= 0);
}

const server = http.createServer(async(req, res) => {
    if(req.method === 'POST' && req.url === '/products'){
        try {
            const product = await parseBody(req);
            if(!isValidProduct){
                sendJSON(res, 400, { error : "Invalid Product data" });
                return;
            }
            sendJSON(res, 201, {
                message : "Product Created",
                product
            });
        } catch (error) {
            const statusCode = error.message === "Request body too large"? 413 :400;
            sendJSON(res, statusCode, { error : error.message });
        }
        return;
    }
    sendJSON(res, 404, {error : "Route not found"});
}).listen(3000, () => {
    console.log("Server live on : http://localhost:3000/products");
});
