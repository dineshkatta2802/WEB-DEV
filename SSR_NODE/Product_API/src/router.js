// const router = (req, res) => {
//     if(req.method === 'GET' && req.url === '/products'){
//         res.end('All Products');
//         return;
//     }
//     if(req.method === 'POST' && req.url === '/products'){
//         res.end('Create Product');
//         return;
//     }
//     res.statusCode = 404;
//     res.end("Route not found");
// }

// module.exports = router;

const routesArray = [];

const router = (req, res) => {
    for(const route of routesArray){
        if(route.method === req.method && route.path === req.url){
            return route.handler(req,res);
        }
        res.statusCode = 404;
        res.end('Route not found');
    }
}

router.get = function (path, handler){
    routesArray.push({
        method : 'GET',
        path, 
        handler
    });
}

router.post = function (path, handler){
    routesArray.push({
        method : 'POST',
        path, 
        handler
    });
}

router.delete = function (path, handler){
    routesArray.push({
        method : 'DELETE',
        path, 
        handler
    });
}

modules.exports = router;