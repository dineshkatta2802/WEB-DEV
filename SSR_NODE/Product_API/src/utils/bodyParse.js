function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString("utf8");
        });

        req.on("end", () => {
            try {
                const data = JSON.parse(body);
            } catch {
                reject(new Error("Invalid JSON"));
            }
        });

        req.on("error", (error) => {
            reject(error);
        });
    });
}

module.exports = {
    parseBody
}