const fs = require("node:fs");
const path = require("node:path");

const args = process.argv.slice(2);

const folder = args[0];

if(!folder){
    console.error("Provide the folder path");
    process.exit(1);
}

// const fileDirectories = [
//     'Coding',
//     'Document',
//     'Images',
//     'Audio',
//     'Video',
// ];

const categories = {
    ".js": "Coding",
    ".py": "Coding",
    ".java": "Coding",
    ".c": "Coding",
    ".html": "Coding",
    ".css": "Coding",

    ".txt": "Documents",
    ".pdf": "Documents",
    ".doc": "Documents",
    ".docx": "Documents",

    ".jpg": "Images",
    ".jpeg": "Images",
    ".png": "Images",
    ".gif": "Images",
    ".webp": "Images",

    ".mp3": "Audio",
    ".wav": "Audio",
    ".m4a": "Audio",

    ".mp4": "Video",
    ".mkv": "Video",
    ".mov": "Video",
};

const downloadsFolder = path.join(__dirname, "Downloads");

// Creating directory by checking its existence
const createDirectory = (dirName, parentFolder, callback) => {
    const directoryPath = path.join(parentFolder, dirName);
    fs.mkdir(directoryPath, {recursive : true}, (err) => {
        if(err) {
            callback(err);
            return;
        }
        callback(null, directoryPath);
    })
}

// Moving files 
const moveFile = (oldPath, newPath) => {
    fs.rename(oldPath, newPath, (err) => {
        if(err){
            console.error(`Failed to move ${oldPath}:`, err.message);
        }
    });
}

createDirectory('Downloads', __dirname);

fs.readdir(folder, {withFileTypes : true}, (err, files) => {
    if(err){
        console.error(err);
        return;
    };
    files.forEach((file) => {
        if(!file.isFile()) return;
        const fileExtension = path.extname(file).toLowerCase();
        const filePath = path.join(folder,file);
        // switch (fileExtension){
        //     case '.js':
        //     case '.py':
        //     case '.java':
        //     case '.c':
        //     case '.html':
        //     case '.css':
        //     createDirectory(fileDirectories[0], downloadsFolder);
        //     moveFile(filePath, path.join(downloadsFolder, fileDirectories[0], file));
        //     break;

        //     case '.txt':
        //     case '.pdf':
        //     case '.doc':
        //     case '.docx':
        //     createDirectory(fileDirectories[1], downloadsFolder);
        //     moveFile(filePath, path.join(downloadsFolder, fileDirectories[1], file));
        //     break;

        //     case '.jpg':
        //     case '.jpeg':
        //     case '.png':
        //     case '.gif':
        //     case '.webp':
        //     createDirectory(fileDirectories[2], downloadsFolder);
        //     moveFile(filePath, path.join(downloadsFolder, fileDirectories[2], file));
        //     break;

        //     case '.mp3':
        //     case '.wav':
        //     case '.m4a':
        //     createDirectory(fileDirectories[3], downloadsFolder);
        //     moveFile(filePath, path.join(downloadsFolder, fileDirectories[3], file));
        //     break;

        //     case '.mp4':
        //     case '.mkv':
        //     case '.mov':
        //     createDirectory(fileDirectories[4], downloadsFolder);
        //     moveFile(filePath, path.join(downloadsFolder, fileDirectories[4], file));
        //     break;
            
        //     default:
        //     createDirectory('OtherFiles', downloadsFolder);
        //     moveFile(filePath, path.join(downloadsFolder, "OtherFiles", file));
        //     break;
        // } 
        const category = categories[fileExtension] || "OtherFiles";
        createDirectory(category, downloadsFolder);
        moveFile(filePath, path.join(downloadsFolder, category, file));
    });
})