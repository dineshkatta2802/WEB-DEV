/*
There are 3 styles of writing the methods of fs : 
1.Callback - fs.method() - No need to store in a explicit variable the callback function does the work
2.Synchronous - fs.methodSync() - Need explicit variable
3.Promises - fs.promises.method() - Need explicit variable & Require => "require(fs/promises)"

=> Read : 
readFile()	readFileSync()	promises.readFile()

=> Write : 
writeFile()	writeFileSync()	promises.writeFile()

=> Append : 
appendFile()	appendFileSync()	promises.appendFile()

=> Create : 
directory	mkdir()	mkdirSync()	promises.mkdir()

=> Read : 
directory	readdir()	readdirSync()	promises.readdir()

=> Rename : 
move	rename()	renameSync()	promises.rename()

=> Copy : 
copyFile()	copyFileSync()	promises.copyFile()

=> Delete : 
rm()	rmSync()	promises.rm()

=> File : 
info	stat()	statSync()	promises.stat()

=> Access : 
access()	accessSync()	promises.access()

=> Permissions : 
chmod()	chmodSync()	promises.chmod()

=> Ownership : 
chown()	chownSync()	promises.chown()

=> Timestamps : 
utimes()	utimesSync()	promises.utimes()

=> Symlink : 
symlink()	symlinkSync()	promises.symlink()

=> Read : 
symlink	readlink()	readlinkSync()	promises.readlink()

=> Real : 
path	realpath()	realpathSync()	promises.realpath()

=> Open : 
open()	openSync()	promises.open()

=> Truncate : 
truncate()	truncateSync()	promises.truncate()
*/

const fs = require('node:fs');

// -> Require for promises 
// const fs = require('fs/promises');

// =>  1. readFile()
// Callback
fs.readFile('data.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
    return;
})

//Synchronous
// const data = fs.readFileSync('data.txt', 'utf8');
// console.log(data);

//Promises
// const data = await fs.readFile('data.txt', 'utf8');
// console.log(data);
// fs.readFile('data.txt', 'utf8)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  2. writeFile()
// Callback
fs.writeFile('data.txt', 'Hello World', (err) => {
    if(err) throw err;
    console.log('File Written');
    return;
})

//Synchronous
//fs.writeFileSync('data.txt', 'Hello World');
// console.log('File Written') 

//Promises
// await fs.writeFile('data.txt', 'Hello World');
// console.log('File Written') 

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  3. appendFile()
// Callback
fs.appendFile('data.txt', '\n This line is added', (err) => {
    if(err) throw err;
    console.log('File Appended');
    return;
})

//Synchronous
// fs.appendFileSync('data.txt', '\n This line is added');
// console.log('File Appended')

//Promises
// await fs.appendFile('data.txt', '\n This line is added');
// console.log('File Appended')

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  4. mkdir()
// Callback
fs.mkdir('Directory Name', (err) => {
    if(err) throw err;
    console.log('Directory Created');
    return;
})

//Synchronous
// fs.appendFileSync('Directory Name');
// console.log('Directory Created')

//Promises
// await fs.appendFile('Directory Name');
// console.log('Directory Created')

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  5. mkdir()
// Callback
fs.mkdir('Directory Name', (err) => {
    if(err) throw err;
    console.log();
    return;
})

//Synchronous
// fs.appendFileSync('Directory Name');
// console.log('')

//Promises
// await fs.appendFile('Directory Name');
// console.log('')

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  6. readdir()
// Callback
fs.readdir('.', (err, files) => {
    if(err) throw err;
    console.log(files); // array of files
    return;
})

//Synchronous
// const files = fs.readdirSync('.');
// console.log(files);

//Promises
// const files = await fs.readdir('.');
// console.log(files);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  7. rename()
// Callback
fs.rename('oldname.txt', "newname.txt", (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.renameSync('oldname.txt', 'newname.txt');

//Promises
// const files = await fs.rename('oldname.txt', 'newname.txt');

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  8. copyFile()
// Callback
fs.copyFile('Original.txt', "Backup.txt", (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.copyFileSync('Original.txt', 'Backup.txt');

//Promises
// const files = await fs.copyFile('Original.txt', 'Backup.txt');

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  9. rm()
// Callback
fs.rm('data.txt', (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.rmSync('data.txt');

//Promises
// const files = await fs.rm('data.txt');

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  9. stat()
/*
stats.size
stats.birthtime
stats.mtime
stats.isFile()
stats.isDirectory()
stats.isSymbolicLink()
*/

// Callback
fs.stat('data.txt', (err, stats) => {
    if(err) throw err;

return;
    console.log(stats.size);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})

//Synchronous
// const files = fs.statSync('data.txt');
// console.log(stats.size());
// console.log(stats.isFile());
// console.log(stats.isDirectory());

//Promises
// const files = await fs.stat('data.txt');
// console.log(stats.size());
// console.log(stats.isFile());
// console.log(stats.isDirectory());

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  10. unlink()
// Callback
fs.unlink('data.txt', (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.unlinkSync('data.txt');

//Promises
// const files = await fs.unlink('data.txt');

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  11. truncate()
// Callback
fs.truncate('data.txt', 10, (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.truncateSync('data.txt', 10);

//Promises
// const files = await fs.truncate('data.txt', 10);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  12. chmod()
// Callback
fs.chmod('data.txt', 0o755, (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.chmodSync('data.txt', 0o755);

//Promises
// const files = await fs.chmod('data.txt', 0o755);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  13. chown()
// Callback
fs.chown('data.txt', 1000, 1000, (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.chownSync('data.txt', 1000, 1000);

//Promises
// const files = await fs.chown('data.txt', 1000, 1000);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  14. utimes()
const now = new Date();
// Callback
fs.utimes('data.txt', now, now, (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.utimesSync('data.txt', now, now);

//Promises
// const files = await fs.utimes('data.txt', now, now);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  15. symlink()
// Callback
fs.symlink('Original.txt', 'ShortCut.txt', (err) => {
    if(err) throw err;
})
return;

//Synchronous
// const files = fs.symlinkSync('Original.txt', 'ShortCut.txt');

//Promises
// const files = await fs.symlink('Original.txt', 'ShortCut.txt');

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  16. readlink()
// Callback
fs.readlink('Shortcut.txt', (err, link) => {
    if(err) throw err;
    console.log(link);
    return;
})

//Synchronous
// const files = fs.readlinkSync('Shortcut.txt');
// console.log(link);

//Promises
// const files = await fs.readlink('Shortcut.txt');
// console.log(link);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// =>  17. realPath()
// Callback
fs.realpath('./Shortcut.txt', (err, path) => {
    if(err) throw err;
    console.log(path);
    return;
})

//Synchronous
// const files = fs.realpathSync('./Shortcut.txt');
// console.log(path);

//Promises
// const files = await fs.realpath('./Shortcut.txt');
// console.log(path);

