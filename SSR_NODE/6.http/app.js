const http = require("node:http");
const {URL} = require("node:url");

const PORT = Number(process.env.PORT) || 3000;
const MAX_BODY = 1_000_000;
let nextId = 3;

const productList = [
    {
        id : 1,
        name : 'Laptop',
        price : 50000,
    },
    {
        id : 2,
        name : 'Keyboard',
        price : 2000
    }
]

// Generic Json response 
const sendJSON = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    console.log(data);
    res.end(JSON.stringify(data));
}

// Parsing the request
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
                fail(new Error("Request body is too large"));
                req.destroy();
                return;
            }
            body += chunk.toString();
        });

        req.on('end', () => {
            if(settled) return;
            try {
                const data = body ? JSON.parse(body) : {};
                settled = true;
                resolve(data);
            } catch {
                fail(new Error('Invalid JSON'));
            }
        });

        req.on('error', (error) => {
            fail(error);
        })
    });
}

// Validating the product 
const validProduct = (item) => {
    return(item && typeof item.name === 'string' && typeof item.price === 'number' 
        && item.name.trim().length > 0 && item.price >= 0 && Number.isFinite(item.price));
}

// Router function
const getRoutes = (req) => {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const segments = requestUrl.pathname.split('/').filter(Boolean);
    return { 
        method : req.method,
        pathName : requestUrl.pathname,
        segments,
        searchParams : requestUrl.searchParams
    }
}

const server = http.createServer(async(req, res) => {
    const {method, pathName, segments, searchParams} = getRoutes(req);

    // GET Method => /product/:id
    if(req.method === 'GET' && pathName.startsWith('/products/')  && segments.length === 2) {
        const id = Number(segments[1]);
        if(!Number.isInteger(id)) {
            sendJSON(res, 400, {error : 'Invalid product id'});
            return;
        }
        const product = productList.find(p => p.id === id);
        if(!product){
            sendJSON(res, 404, {error : "Product not found"});
            return;
        }
        sendJSON(res, 200, product);
        return;
    }

    // POST Method => /products
    if(req.method === 'POST' && pathName === '/products' && segments.length === 1){
        try {
            const item = await parseBody(req);
            if(!validProduct(item)){
                sendJSON(res, 400, {error : 'Invalid product data'});
                return;
            }
            const newProduct = {
                id : nextId++,
                name : item.name.trim(),
                price : item.price
            }
            productList.push(newProduct);
            sendJSON(res, 201, { message : "Product Created", product : newProduct});
        } catch(error){
            const statusCode = error.message === 'Request body too large' ? 413 : 400;
            sendJSON(res, statusCode, { error : error.message });
        }
        return;
    }

    // PUT Method => /products/:id
    if(req.method === 'PUT' && pathName.startsWith('/products/') && segments.length === 2){
        const id = Number(segments[1]);
        if(!Number.isInteger(id)) {
            sendJSON(res, 400, {error : 'Invalid product id'});
            return;
        }
        const productIndex = productList.findIndex(p => p.id === id);
        if(productIndex === -1){
            sendJSON(res, 404, { error : 'Product not found' });
            return;
        }
        try {
            const item = await parseBody(req);
            if(!validProduct(item)){
                sendJSON(res, 400, {error : 'Invalid product data'});
                return;
            }
            productList[productIndex] = {
                id,
                name : item.name.trim(),
                price : item.price
            }
            sendJSON(res, 200, productList[productIndex]);
        } catch(error){
            const statusCode = error.message === 'Request body too large' ? 413 : 400;
            sendJSON(res, statusCode, { error : error.message });
        }
        return;
    }

    // PATCH Method => /products/:id
    if(req.method === 'PATCH' && pathName.startsWith('/products/') && segments.length === 2){
        const id = Number(segments[1]);
        if(!Number.isInteger(id)) {
            sendJSON(res, 400, {error : 'Invalid product id'});
            return;
        }
        const product = productList.find(p => p.id === id);
        if(!product){
            sendJSON(res, 404, { error : 'Product not found' });
            return;
        }
        try {
            const item = await parseBody(req);
            if(item.name !== undefined){
                if(typeof item.name !== 'string' || item.name.trim().length === 0){
                    sendJSON(res, 400, { error : 'Invalid Name' });
                    return;
                }
                product.name = item.name.trim();
            }
            if(item.price !== undefined){
                if(typeof item.price !== 'number' || item.price < 0 || !Number.isFinite(item.price)){
                    sendJSON(res, 400, { error : 'Invalid price' });
                    return;
                }
                product.price = item.price;
            }
            sendJSON(res, 200, product);
        } catch(error){
            const statusCode = error.message === 'Request body too large' ? 413 : 400;
            sendJSON(res, statusCode, { error : error.message });
        }
        return;
    }  

    // DELETE Method => /products/:id
    if(req.method === 'DELETE' && pathName.startsWith('/products/') && segments.length === 2){
        const id = Number(segments[1]);
        if(!Number.isInteger(id)) {
            sendJSON(res, 400, {error : 'Invalid product id'});
            return;
        }
        const productIndex = productList.findIndex(p => p.id === id);
        if(productIndex === -1){
            sendJSON(res, 404, { error : 'Product not found' });
            return;
        }
        productList.splice(productIndex, 1);
        sendJSON(res, 200, { message : "Product deleted" });
        return;
    }

    sendJSON(res, 404, {error : 'Route not found'});

}).listen(PORT, () => {
    console.log(`Server live on http://localhost:${PORT}`);
});