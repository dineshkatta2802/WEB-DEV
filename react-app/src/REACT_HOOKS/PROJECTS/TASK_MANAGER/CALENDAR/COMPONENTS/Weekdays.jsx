import React from 'react';
import '../Calendar.css';

export default function WeekDays(){
    // Arrays of the days in a week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return(
            <div className="weekdays">
                {/* <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span> */}

                {daysOfWeek.map(day => (
                    <span key={day}>{day}</span>
                ))}
            </div>
    );
}