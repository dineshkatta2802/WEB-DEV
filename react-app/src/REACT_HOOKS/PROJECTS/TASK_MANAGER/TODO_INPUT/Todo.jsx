import React from 'react';
import { useState } from 'react';
import './Todo.css'

export default function Todo(){
    return(<>
        <div className='TodoCon'>   
            <h1 className='heading'>Todo List</h1>

            <div className="eventInfo">
                <div className="eventInput">
                    <textarea placeholder='Enter event info...'/>
                    <div className="btns">
                        <button className='eventAddBtn add'>Add</button>
                        <button className='eventAddBtn clear'>Clear</button>
                    </div>
                </div>

                <div className="eventInfoCustomization">
                    <button className="dateBtn">Date <i class="fa-solid fa-calendar-days"></i></button>
                    <button className="priorityBtn">Priority <i class="fa-solid fa-flag"></i></button>
                    <button className="clockBtn">Clock <i class="fa-solid fa-alarm-clock"></i></button>
                </div>
            </div>
        </div>
        </>
    );
}