import React from 'react';
import './Calendar.css'

export default function Calendar(){
    return(
        <div className='CalendarCon'>
                <h1 className="heading">Calendar</h1>
                <div className="navigation-date">
                    <h2 className="month">June</h2>
                    <h2 className="year">2025</h2>
                    <div className="navigation-date-btns">
                        <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </div>
                </div>
        </div>
    );
}