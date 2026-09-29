const fs = require('node:fs');
const csv = require('csvtojson');
const { Transform } = require('node:stream');

async function main() {
    const readStream = fs.createReadStream('./import.csv');
    const writeStream = fs.createWriteStream('./export.csv');
    // readStream.on('data', (buffer) => {
    //     console.log(buffer.toString('utf-8'));
    //     writeStream.write(buffer);
    // });
    // readStream.on('end', () => {
    //     console.log('Stream Ended');
    //     writeStream.end()
    // });

    // To avoid back pressure we are gonna be using pipes()
    readStream
                .pipe(csv({delimiter : ';'}, {objectMode : true}))
                .pipe(new Transform({objectMode : true, transform(chunk, env, callback){
                    console.log('>>>Chunk', chunk)
                    callback(null, chunk);
                }}))
                .on('data', data => {
        console.log('>>>Data : ')
        console.log(data);
    });
}
main();