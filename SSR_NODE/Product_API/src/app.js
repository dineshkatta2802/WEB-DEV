const middlewaresArray = [];

function use(middleware) {
    middlewaresArray.push(middleware);
}

function handle(req, res) {
    let index = 0;
    const next = () => {
        const middleware = middlewaresArray[index++];
        if(!middleware){
            if(error) {
                res.statusCode = 500;
                res.end('Internal Server Error')
            }
            else {
                res.statusCode = 404;
                res.end("Not Found");
            }
            return;
        }

        if(error) {
            if(middlewaresArray.length === 4) {
                middleware(error, req, res, next);
            }
            else {
                next(error);
            }
            return;
        }

        if(middlewaresArray.length === 4){
            next();
            return;
        }

        middleware(req, res, next);
    }
    next();
}

module.exports = {
    use, 
    handle
}