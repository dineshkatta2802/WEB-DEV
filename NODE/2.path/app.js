const fs = require('fs/promises');
const path = require('node:path');

async function main() {
    const filePath = path.join(__dirname, 'data', 'message.txt');
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

main();