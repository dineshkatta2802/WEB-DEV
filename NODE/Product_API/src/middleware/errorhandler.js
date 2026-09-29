function errorHandler(error, req, res, next) {
    console.error(error);

    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error : 'Internal Server Error'}));
}

module.exports = errorHandler;