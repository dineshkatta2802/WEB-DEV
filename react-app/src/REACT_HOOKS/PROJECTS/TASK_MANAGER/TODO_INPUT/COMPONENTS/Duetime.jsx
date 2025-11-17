import React, { useEffect } from 'react';
import '../Todo.css'
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function DueTimePopup({setShowDueTimePopup,eventTime,setEventTime,popupTIme,setPopupTime}){
    function closeDueTimePopup(e){
        if(e.target.classList.contains('DueTimeCon') ){
            setShowDueTimePopup(prev => !prev);
        }
    }

    function handleKeyDown(e){
        if(e.key === 'Escape'){
            setShowDueTimePopup(false);
        }
    } 

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return(
        <div className='DueTimeCon' onClick={closeDueTimePopup} >
            <div className="followingDueTime" onClick={(e) => e.stopPropagation()}>
                    <div className="time-input">
                        <div className="event-popup-time">Time</div>
                        <input type="number" name="hours" min={0} max={23} className='hours' value={eventTime.hours} onChange={(e) => setEventTime({...eventTime , hours : e.target.value})}/>
                        <p style={{color : 'white'}}>:</p>
                        <input type="number" name="minutes" min={0} max={59} className='minutes' value={eventTime.minutes} onChange={(e) => setEventTime({...eventTime , minutes : e.target.value})}/>
                    </div>
            </div>
        </div>
    );
}