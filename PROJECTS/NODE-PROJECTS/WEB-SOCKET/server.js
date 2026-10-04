const http = require("node:http");
const {WebSocketServer} = require("ws");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('This is normal HTTP response');
}).listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}`);
});

const wss = new WebSocketServer({server});

const clients = new Set();

wss.on('connection', (endUser) => {
    clients.add(endUser);

    console.log('Clients Connected');

    endUser.on('message', (data) => {
        for(const user of clients) {
            user.send(data.toString());
        }
    })

    endUser.on('close', () => {
        clients.delete(endUser);
        console.log('Clients disconnected');
    })
});

/** 

const userA = new WebSocket("ws://localhost:3000");
userA.onmessage = (event) => {
    console.log("Message:", event.data);
};

const userB = new WebSocket("ws://localhost:3000");
userB.onmessage = (event) => {
    console.log("Message:", event.data);
};

userA.send("Hello from A");

userB.send("Hello from B");

*/

