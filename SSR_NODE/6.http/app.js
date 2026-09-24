// const http = require("node:http");
// const {URL} = require("node:url");

// const server = http.createServer((req, res) => {
//     const requestURL = new URL(req.url, "http://localhost:3000");

//     res.setHeader('Content-Type', "application/json");

//     // GET Method
//     if(req.method === 'GET' && requestURL.pathname === '/'){
//         res.statusCode = 200;
//         res.end("Home page");
//     }

//     // if(req.method === 'GET' && requestURL.pathname === '/products'){
//     //     const productId =  requestURL.searchParams.get('id');
//     //     res.statusCode = 200;
//     //     res.end(JSON.stringify({
//     //         message : 'product name',
//     //         productId
//     //     }));
//     //     return;
//     // }

//     // POST Method
//     if(req.method === 'POST' && requestURL.pathname === '/products'){
//         const MAX_BODY = 1_000_000;
//         let body = "";
//         let bodySize = 0;
//         let tooLarge = false;
//         req.on('data', (chunks) => {
//             if(bodySize > MAX_BODY){
//                 tooLarge = true;
//                 req.destroy();
//                 return;
//             }
//             body += chunks.toString();
//         });

//         req.on('end', () => {
//             try {
//                 const product = JSON.parse(body);
//                 // if(typeof product.name !== "string" || typeof product.price !== "nummber"){
//                 //     res.statusCode = 400;
//                 //     res.end("Invalid product data");
//                 //     return;
//                 // }
//                 console.log("Product : ", product);
//                 res.statusCode = 201;
//                 res.setHeader('Content-Type','application/json');
//                 res.end(JSON.stringify({
//                     message : 'Product Received',
//                     product
//                 }))
//             } catch (error) {
//                 res.statusCode = 400;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.end(JSON.stringify({
//                     error : "Invalid JSON"
//                 }));
//             }
//             console.log('Finishing receiving body : \n', body);
//             console.log("\n")
//             res.end('Body received');
//         });
//         return;
//     }

//     // else
//     res.statusCode = 404;
//     res.end("Route Not found");
// }).listen(3000, () => {
//     console.log("Server is live on http://localhost:3000");
// })

//==================================================================================================================================

const http = require("node:http");

const MAX_BODY = 1_000_000;

const sendJSON = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
    if(req.method !== 'POST' || req.url !== '/products'){
        sendJSON(res, 403, { error : "Route not found" });
        return;
    }

    let body = "";
    let bodySize = 0;

    req.on("data", (chunk) => {
        bodySize += chunk.length;
        if(bodySize > MAX_BODY) {
            sendJSON(res, 413, { error : "Request body is too large"});
            req.destroy();
            return;
        }
        body += chunk.toString();
    });

    req.on("end", () => {
        try {
            const product = JSON.parse(body);
            if(typeof product.name !== "string" || typeof product.price !== "number"){
                sendJSON(res, 400, { error : "Invalid product data" });
                return;
            }
            sendJSON(res, 201, { message : "Product Created", product});
        }
        catch(error) {
            sendJSON(res, 400, { error : 'Invalid JSON'});
        }
    });

    req.on('error', () =>{
        if(!res.writableEnded){
            sendJSON(res, 400, { error : "Request Stream Error" });
        }
    });
}).listen(3000, () => {
    console.log("Server live on : http://localhost:3000");
})