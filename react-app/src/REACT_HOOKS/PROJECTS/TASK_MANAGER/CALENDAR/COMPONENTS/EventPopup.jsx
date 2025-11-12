import React from 'react';
import '../Calendar.css';

export default function EventPopup({setShowEventPopup}){
        function closeEventPopup(){
            setShowEventPopup(false);
        }
    return(
                <div className="event-popup">
                    <div className="time-input">
                        <div className="event-popup-time">Time</div>
                        <input type="number" name="hours" min={0} max={24} className='hours'/>
                        <p>:</p>
                        <input type="number" name="minutes" min={0} max={60} className='minutes' />
                    </div>
                    <textarea name="textarea" placeholder='Enter event info...'></textarea>
                    <button className="event-popup-btn">Add Event</button>
                    <button className="close-event-popup" onClick={closeEventPopup}><i className="fa-solid fa-xmark" aria-hidden="true"></i></button>
                </div>
    );
}