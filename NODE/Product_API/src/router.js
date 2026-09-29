const routesArray = [];

const matchRoutes = (routePath, requestPath) => {
    const routeSegments = routePath.split('/').filter(Boolean);
    const requestSegments = requestPath.split('/').filter(Boolean);

    if(routeSegments.length !== requestSegments.length) return null;

    const params = {};

    for(let i=0; i< routeSegments.length; i++){
        const routeSeg = routeSegments[i];
        const requestSeg = requestSegments[i];

        if(routeSeg.startsWith(':')){
            const paramName = routeSeg.slice(1); // String - slice() not array splice()
            // To handle encoded characters in the url : /products/hello%20world
            params[paramName] = decodeURIComponent(requestSeg);
        }
        else if(routeSeg !== requestSeg) return null;
    }
    return params;
}

const router = (req, res) => {
    const url = new URL(req.url, 'http://localhost:3000');
    for(const route of routesArray){
        if(route.method !== req.method) continue;
        const params = matchRoutes(route.path, url.pathname);
        if(params !== null){ 
            req.params = params;
            req.query = url.searchParams;
            return route.handler(req, res);
        }
    }
    res.statusCode = 404;
    res.end('Route not found');
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

router.put = function (path, handler) {
    routesArray.push({
        method: 'PUT',
        path,
        handler
    });
}

router.patch = function (path, handler) {
    routesArray.push({
        method: 'PATCH',
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

module.exports = router;