const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("task", () => {
    const start = Date.now();

    while (Date.now() - start < 3000) {
        // Deliberately block the JavaScript thread
    }

    console.log("Heavy task completed");
});

console.log("Before");

emitter.emit("task");

console.log("After");