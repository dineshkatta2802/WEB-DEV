import '../Calendar.css'; 

export default function EventPopup({setShowEventPopup , handleEventChange, addTaskFromPopup, eventTask,eventTime,setEventTime}) {
        function closeEventPopup(){
            setShowEventPopup(false);
        }
    return(
                <div className="event-popup">
                    <div className="time-input">
                        <div className="event-popup-time">Due-Time</div>
                        <input type="number" name="hours" min={0} max={24} className='hours' value={eventTime.hours} onChange={(e) => setEventTime({...eventTime , hours : e.target.value})}/>
                        <p>:</p>
                        <input type="number" name="minutes" min={0} max={60} className='minutes' value={eventTime.minutes} onChange={(e) => setEventTime({...eventTime , minutes : e.target.value})}/>
                    </div>
                    <textarea name="textarea" placeholder='Enter event info...' onChange={(e) => {if(e.target.value.length <= 35){handleEventChange(e)}}} value={eventTask} onKeyDown={(e) => {if(e.key === 'Enter'){ e.preventDefault(); addTaskFromPopup()}}}/>
                    <button className="event-popup-btn" onClick={addTaskFromPopup}>Add Event</button>
                    <button className="close-event-popup" onClick={closeEventPopup}><i className="fa-solid fa-xmark" aria-hidden="true"></i></button>
                </div>
    );
}