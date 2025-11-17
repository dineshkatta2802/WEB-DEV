import React, { useEffect, useState } from 'react';
import './TodoList.css'

export default function TodoList({list = [], showControls, handleMoreClick}) {

    return(
        <div className='TodoListCon'>
            {/* <h1 className="TodoListHeading">List</h1> */}
            {list.length === 0 ? (
                <p className='empty'>No tasks yet!!!</p>
            ) : (
                <ul className='tasks'>
                    {list.map(item => (
                        <li key={item.id} className='taskItem'>
                            <div className="taskInfo">
                                <p className="taskNumber">{item.id}</p>
                                <p className="taskName">{item.name}</p>
                                {item.time && <p className="taskTime">{item.time.hours}:{item.time.minutes}</p>}
                                {item.date && (
                                                <p className="taskDate">
                                                    {`${item.date.getDate().toString().padStart(2, '0')}/${(item.date.getMonth() + 1).toString().padStart(2, '0')}/${item.date.getFullYear()}`}
                                                </p>
                                    )}
                                

                            </div>
                        
{/* When i click on the button it sends the array(tasks) id value to the handleMoreClick function */}
                            <button className="more" onClick={() => handleMoreClick(item.id)}><i class="fa-solid fa-grip"></i></button>

{/* The below line says that show the contols only to the respective array object whose has a respective id */}
                            {showControls[item.id] && (
                                <div className="controls">
                                    <button className="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button className="delete"><i class="fa-solid fa-trash"></i></button>
                                    <button className="duplicate"><i class="fa-solid fa-copy"></i></button>
                                    <button className="comment"><i class="fa-solid fa-comment"></i></button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}