const fs = require("node:fs");
const path = require("node:path");

const args = process.argv.slice(2);

const taskFile = path.join(__dirname, 'task.json');

const data = fs.readFileSync(taskFile, 'utf-8');
let tasks = JSON.parse(data);

const newId = tasks.length > 0 ?Math.max(...tasks.map(t => t.id))+1 : 1;

// Adding
if(args[0] === 'add' && args[1]?.trim()){
    const newTask = {
        id : newId,
        title : args[1],
        completed : false
    }
    tasks.push(newTask);
    fs.writeFileSync(taskFile, JSON.stringify(tasks, null ,2), );
    console.log(`New Task added : ${args[1]}`);
}

// List
else if(args[0] === 'list') {
    if(args[1] === "--completed"){
        const completedTask = tasks.filter(t => t.completed === true);
        if(completedTask.length === 0){
            console.log("No Completed Tasks");
            return;
        }
        completedTask.forEach(task => {
            console.log(`${task.id}. ${task.title}\t [${(task.completed)?"Completed":"Pending"}]`);
        });
    }
    else if(args[1] === "--pending"){
        const inCompletedTask = tasks.filter(t => t.completed === false);
        if(inCompletedTask.length === 0){
            console.log("No Pending Tasks");
            return;
        }
        inCompletedTask.forEach(task => {
            console.log(`${task.id}. ${task.title}\t [${(task.completed)?"Completed":"Pending"}]`);
        });
    }
    else{
        tasks.map((task) => {
            console.log(`${task.id}. ${task.title}\t [${(task.completed)?"Completed":"Pending"}]`);
        });
    }
}

// Complete
else if(args[0] === 'complete' && Number(args[1])){
    const id = Number(args[1]);
    if(!Number.isInteger(id) || id <= 0){
        console.log("Invalid task id");
        return;
    }
    const specificTask = tasks.find(p => p.id === id)
    if(!specificTask){
        console.log('Task not found');
        return;
    }
    if(specificTask.completed === true){
        console.log('Task Already completed');
        return;
    }
    if(specificTask) specificTask.completed = true;
    fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 3));
    console.log(`${args[1]} marked as completed`);
}

// Delete
else if(args[0] === "delete" && Number(args[1])){
    const id = Number(args[1]);
    if(!Number.isInteger(id) || id <= 0){
        console.log("Invalid task id");
        return;
    }
    const specificTask = tasks.find(p => p.id === id);
    if(!specificTask){
        console.log('Task not found');
        return;
    }
    tasks = tasks.filter(t => t.id !== id);
    fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 3));
    console.log(`${Number(args[1])} Task Deleted`);
}

// Clear
else if(args[0] === 'clear' && !args[1]) {
    const clearedTask = [];
    fs.writeFileSync(taskFile, JSON.stringify(clearedTask, null, 3));
}

// Update 
else if(args[0] === 'update' && Number(args[1]) && args[2]?.trim()){
    const id = Number(args[1]);
    if(!Number.isInteger(id) || id <= 0){
        console.log("Invalid task id");
        return;
    }
    const specificTask = tasks.find(p => p.id === id)
    if(!specificTask){
        console.log('Task not found');
        return;
    }
    if(specificTask) specificTask.title = args[2];
    fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 3));
    console.log(`${args[1]} title updated to ${args[2]}`);
}

else {
    console.log("Enter Valid Command!!!");
    return;
}