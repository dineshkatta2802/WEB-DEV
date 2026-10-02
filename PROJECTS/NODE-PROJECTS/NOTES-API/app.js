const http = require("node:http");
const fs = require("node:fs/promises");

const PORT = 3000;

const getData = async() => {
    const data = await fs.readFile('./notes.json', 'utf-8');
    return JSON.parse(data);
}

const sendResponse = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}

const requestRoute = (req) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url.pathname.split('/').filter(Boolean));
    return url.pathname.split('/').filter(Boolean);
}

const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on('data', (chunks) => {
            body += chunks.toString('utf-8');
        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
        req.on('error', (err) => {
            console.error(err);
            reject(err);
            return;
        })
    })
}

const validateData = (data) => {
    return (typeof data.title === 'string' && typeof data.content === 'string' && 
        data.title.trim().length >0 && data.content.trim().length>0); 
}

const server = http.createServer(async (req, res) => {
    try {
        const segments = requestRoute(req);

        // GET - /notes or /notes/:id
        if(req.method === 'GET' && segments[0] === 'notes') {
            const notes = await getData();
            if(segments.length === 1){
                return sendResponse(res, 200, notes);
            }
            if(segments.length === 2){
                const id = Number(segments[1]);
                if(!Number.isInteger(id)) return sendResponse(res, 400, {error : 'Invalid id '});
                const note = notes.find(n => n.id === id);
                if(!note) return sendResponse(res, 404, {error : "Note not found"});
                return sendResponse(res, 200, note);
            }
        }

        // POST - /notes
        if(req.method === 'POST' && segments.length === 1 && segments[0] === 'notes') {
            const data = await parseBody(req);
            if(!validateData(data)){
                return sendResponse(res, 400, {error : "Invalid data"});
            }
            const notes = await getData();
            const nextId = notes.length? Math.max(...notes.map(n => n.id))+1 : 1;
            const newNote = {
                id : nextId,
                title : data.title,
                content : data.content
            }
            notes.push(newNote);
            await fs.writeFile('./notes.json', JSON.stringify(notes, null, 3));
            console.log(notes);
            return sendResponse(res, 201, {message : "Note Added", note : newNote});
        }

        // DELETE - /notes or /notes/:id
        if(req.method === 'DELETE' && segments[0] === 'notes') {
            const notes = await getData();
            if(notes.length === 0) return sendResponse(res, 400, {error : "Notes-JSON is Empty"});
            if(segments.length === 1){
                await fs.writeFile('./notes.json', JSON.stringify([], null, 3));
                return sendResponse(res, 200, {message : 'JSON Deleted'});
            }
            if(segments.length === 2){
                const id = Number(segments[1]);
                if(!Number.isInteger(id)) return sendResponse(res, 400, {error : 'Invalid ID'});
                const noteId = notes.findIndex(n => n.id === id);
                if(noteId === -1) return sendResponse(res, 404, {error : "ID not found"});
                notes.splice(noteId, 1);
                await fs.writeFile('./notes.json', JSON.stringify(notes, null, 3));
                return sendResponse(res, 204, {message : 'Notes Updated', deletedNote : noteId});
            }
        }

        // PUT - notes/:id
        if(req.method === 'PUT' && segments[0] === 'notes') {
            const notes = await getData();
            const id = Number(segments[1]);
            if(!Number.isInteger(id)) return sendResponse(res, 400, {error : "Invalid Id"});
            const newNote = await parseBody(req);
            if(!validateData(newNote)) return sendResponse(res, 400, {error : "Invalid Note Data"});
            const noteId = notes.findIndex(n => n.id === id);
            if(noteId === -1) return sendResponse(res, 404, {error : "Invalid ID"});
            const oldNote = notes[noteId];
            notes[noteId] = {
                id,
                title : newNote.title.trim(),
                content : newNote.content
            }
            await fs.writeFile('./notes.json', JSON.stringify(notes, null,3));
            return sendResponse(res, 200, {message : "Note Updated", OldNote : oldNote, UpdatedNote : newNote})
        }
        return sendResponse(res, 404, {error : "Route not Found"});
    } 
    catch (error) {
        console.error(error);
        return sendResponse(res, 500, {error : 'Internal Server Error'})
    }
}).listen(PORT, () => {
    console.log(`Server live at http://localhost:${PORT}/notes`);
})