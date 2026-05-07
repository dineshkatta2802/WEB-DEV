import React, { useState } from 'react';
import './ToDo.css'

let nextId = 0; 

export default function ToDo_List(){
    // Lets have a state variable called task which gonna get the 
    // tasks(i.e, the name of the task) from the input box and dynamically updated it
    // by setTask() function
    const [task, setTask] = useState(""); //Empty task

    //we gonna take a list of taks and render it later
    const [lists, setList] = useState([]); //Empty array od list

    return(
        <div className='Con'>
            <div className="card">
                <h1 style={{textAlign : 'center', fontSize : 'bold'}}>TO-DO LIST</h1>
                <div className="inputHolder">
                    <label htmlFor="">
                        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                        {/* -->The value is the initial contnet that u r gonna see in the input box

                        --> OnChnging the value inside the input box im gonna dynamically change the 
                        task variable by event target attribute via setTask() function 
                        i.e, if i enter suppose to say cleaning in the inputbox the task variable 
                        is now gonna be 'task = cleaning'  */}
                    </label>
                </div>

                <div className="buttons">
                <button className='btn' onClick={() => {
                                        if(task.trim() === ''){
                                                alert("Enter Task")
                                            }
                                        else{
                                            setList([
                                            ...lists,// This spread syntax tells to bring the whole lists of tasks 
                                            {id : nextId++, name : task},// this line tell u to add this task 
                                            ])
                                        setTask('')
                                        }
                                        }}>Add</button>

                    <button className='btn' onClick={() => setList([])}>Clear</button>
                </div>

                <div className="taskList">
                    <ul className='taskName'>{lists.map(list => (
                                    <li key={list.id}><p className='para'>{list.name}</p>
                                    <button className='btn del' onClick={() => setList(lists.filter(a => a.id !== list.id))}>Delete</button>
                                    </li>
                                ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}