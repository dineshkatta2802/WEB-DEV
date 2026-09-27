function sendJSON(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}

function sendNoContent(res) {
    res.statusCode = 204;
    res.end();
}

module.exports = {
    sendJSON,
    sendNoContent
}