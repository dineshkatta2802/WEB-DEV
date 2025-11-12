import React from 'react';
import './Todo.css'

export default function Todo(){
    return(<>
        <h1 className='heading'>Todo List</h1>
        <div className='TodoCon'>   
            <div className="eventInfo">
                <div className="eventInput">
                    <input type="text" placeholder='Enter event info...'/>
                    <button className='eventAddBtn add'>Add</button>
                    <button className='eventAddBtn clear'>Clear</button>
                </div>

                <div className="eventInfoCustomization">
                    <button className="dateBtn">Date <i class="fa-solid fa-calendar-days"></i></button>
                    <button className="priorityBtn">Priority <i class="fa-solid fa-flag"></i></button>
                    <button className="clockBtn">Clock <i class="fa-solid fa-alarm-clock"></i></button>
                    <button className="moreBtn">More <i class="fa-solid fa-grip"></i></button>
                </div>

                <div className="eventList">
                    
                </div>
            </div>
        </div>
        </>
    );
}