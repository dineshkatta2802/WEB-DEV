function notFound(req, res) {
    res.statusCode = 404;

    res.setHeader(
        "Content-Type",
        "application/json"
    );

    res.end(JSON.stringify({
        error: "Route not found"
    }));
}

module.exports = notFound;