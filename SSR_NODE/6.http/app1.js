const http = require("node:http");
const { URL } = require("node:url");

const MAX_BODY = 1_000_000;

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Keyboard",
        price: 2000
    }
];

// Generic JSON response
function sendJSON(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json");
    console.log(data);
    res.end(JSON.stringify(data));
}

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
            if (!body.trim()) {
                fail(new Error("Request body is required"));
                return;
            }
            try {
                const data = JSON.parse(body);
                settled = true;
                resolve(data);
            } catch (error) {
                fail(new Error("Invalid JSON"));
            }
        });

        req.on('error', (error) => {
            fail(error);
        });
    });
}

const isValidProduct = (product) => {
    return (product && typeof product.name === 'string' && 
        product.price === 'number' && product.name.trim().length > 0 &&
        Number.isFinite(product.price) && product.price >= 0);
}

const server = http.createServer(async(req, res) => {
    const requestUrl = new URL(req.url,"http://localhost:3000");

    const segments = requestUrl.pathname.split("/").filter(Boolean);

    if (req.method === "GET" && segments[0] === "products" && segments.length === 2) {
        const id = Number(segments[1]);
        if (!Number.isInteger(id)) {
            sendJSON(res, 400, {error: "Invalid product ID"});
            return;
        }

        const product = products.find((product) => product.id === id);

        if (!product) {sendJSON(res, 404, {error: "Product not found"});
        return;
        }

        sendJSON(res, 200, product);
        return;
    }

    if(req.method === 'POST' && requestUrl.pathname === '/products'){
        try {
            const product = await parseBody(req);
            if(!isValidProduct(product)){
                sendJSON(res, 400, { error : "Invalid Product data" });
                return;
            }
            const newProduct = {
                id : products.length+1,
                name : product.name,
                price : product.price
            };
            products.push(newProduct);
            sendJSON(res, 201, {
                message : "Product Created",
                newProduct
            });
        } catch (error) {
            const statusCode = error.message === "Request Body too large"? 413 :400;
            sendJSON(res, statusCode, { error : error.message });
        }
        return;
    }

    sendJSON(res, 404, {
        error: "Route not found"
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});