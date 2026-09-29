const process = require("node:process");

// 1. process.argv
console.log("\n => process.argv :")
//cli> node app.js hello 123
console.log(process.argv);
/*
process.argv[0] // Node executable
process.argv[1] // app.js
process.argv[2] // "hello"
process.argv[3] // "123"
*/

// 2. process.env
console.log("\n => process.env :")
//cli> PORT=3000 node app.js
console.log(process.env.PORT);

// 3. process.cwd()
console.log("\n => process.cwd() :")
console.log(process.cwd());

// 4. process.chdir()
console.log("\n => process.chdir() :")
process.chdir('/tmp')
console.log(process.cwd());

// 5. process.exit()
console.log("\n => process.exit() :")
// process.exit();

// 6. process.exitCode(1)
console.log("\n => process.exitCode(1) :")
// process.exitCode(1);

// 7. process.on()
console.log("\n => process.on() :")
process.on('exit', () => {
    console.log('Program terminated');
});

// 8. process.emit()
console.log("\n => process.emit() :")
process.on('hello', () => {
    console.log('Program terminated');
});
process.emit('hello');

// 9. process.nextTick()
console.log("\n => process.nextTick() :")
console.log('1')
process.nextTick(() => {
    console.log('2');
})
console.log('3')

// 10. process.memoryUsage()
console.log("\n => process.memoryUsage() :")
console.log(process.memoryUsage());

// 11. process.cpuUsage()
console.log("\n => process.cpuUsage() :")
console.log(process.cpuUsage());

// 12. process.hrtime()
console.log("\n => process.hrtime() :")
console.log(process.hrtime());

// 13. process.hrtime();
console.log("\n => process.hrtime(); :")
const start = process.hrtime.bigint();
for(let i=0; i<5; i++){console.log('Some operation');}
const end = process.hrtime.bigint();
console.log(`Total time : ${end-start}nanoseconds`);

// 14. process.uptime()
console.log("\n => process.uptime() :")
console.log(process.uptime());

// 15. process.kill()
console.log("\n => process.kill() :")
process.kill(process.pid);

// 16.process.send()
console.log("\n => send() :")
process.send("Hello Parents");

// Important process properties
console.log("\n => properties :")
// 17. process.pid
console.log("\n => process.pid :")
console.log(process.pid);

// 18. process.ppid
console.log("\n => process.ppid :")
console.log(process.ppid);

// 19. process.version
console.log("\n => process.version :")
console.log(process.version);

// 20. process.platform
console.log("\n => process.platform :")
console.log(process.platform);

// 21. process.arch
console.log("\n => process.arch :")
console.log(process.arch);

// 22. process.stdin
console.log("\n => process.stdin :")
process.stdin.on('exit', () => {
    console.log('Exited');
});

// 23. process.stdout
console.log("\n => process.stdout :")
process.stdout.write('Standard Output');

// 24. process.stderr
console.log("\n => process.stderr :")
process.stderr.write('Output Error');
