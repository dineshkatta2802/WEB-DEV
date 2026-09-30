const fs = require("node:fs");
const path = require("node:path");

const args = process.argv.slice(2);

const folder = args[0];

if(!folder){
    console.error("Provide the folder path");
    process.exit(1);
}

const fileDirectories = [
    'Coding',
    'Document',
    'Images',
    'Audio',
    'Video',

];

const downloadsFolder = path.join(__dirname, "Downloads");

// Creating directory by checking its existence
const folderExistence_Creation = (dirName, parentFolder) => {
    const directoryPath = path.join(parentFolder, dirName);
    if(fs.existsSync(directoryPath)){ 
        console.log(`"${dirName}" directory Exists in ${directoryPath}`) 
    }
    else{
        fs.mkdirSync(directoryPath, {recursive : true});
        console.log(`New "${dirName}" directory created in ${parentFolder}`);
    }     
}

// Moving files 
const fileFormatting = (oldPath, newPath) => {
    fs.rename(oldPath, newPath, (err) => {
        if(err){
            console.log('Error moving the files');
        }
    });
}

folderExistence_Creation('Downloads', __dirname);

fs.readdir(folder, (err, files) => {
    if(err){
        console.error(err);
        return;
    };
    files.forEach((file) => {
        const fileExtension = path.extname(file).toLowerCase();
        const filePath = path.join(folder,file);
        // console.log(filePath);
        // console.log(path.join(downloadsFolder, fileDirectories[0], file))
        switch (fileExtension){
            case '.js':
            case '.py':
            case '.java':
            case '.c':
            case '.html':
            case '.css':
            folderExistence_Creation(fileDirectories[0], downloadsFolder);
            fileFormatting(filePath, path.join(downloadsFolder, fileDirectories[0], file));
            break;

            case '.txt':
            case '.pdf':
            case '.doc':
            case '.docx':
            folderExistence_Creation(fileDirectories[1], downloadsFolder);
            fileFormatting(filePath, path.join(downloadsFolder, fileDirectories[1], file));
            break;

            case '.jpg':
            case '.jpeg':
            case '.png':
            case '.gif':
            case '.webp':
            folderExistence_Creation(fileDirectories[2], downloadsFolder);
            fileFormatting(filePath, path.join(downloadsFolder, fileDirectories[2], file));
            break;

            case '.mp3':
            case '.wav':
            case '.m4a':
            folderExistence_Creation(fileDirectories[3], downloadsFolder);
            fileFormatting(filePath, path.join(downloadsFolder, fileDirectories[3], file));
            break;

            case '.mp4':
            case '.mkv':
            case '.mov':
            folderExistence_Creation(fileDirectories[4], downloadsFolder);
            fileFormatting(filePath, path.join(downloadsFolder, fileDirectories[4], file));
            break;
            
            default:
            folderExistence_Creation('OtherFiles', downloadsFolder);
            fileFormatting(filePath, path.join(downloadsFolder, "OtherFiles", file));
            break;
        } 
    });
})