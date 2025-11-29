import React,{useEffect} from 'react';
import '../Todo.css'

export default function DatePopup({setShowDatePopup, currentDate, popupDate, setPopupDate}){
    const dayOfWeek = currentDate.getDay();   // 0–6
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;

    const nextSaturday = new Date();
    nextSaturday.setDate(currentDate.getDate() + daysUntilSaturday);

    const weekend = nextSaturday.getDate();
    function closeDatePopup(){
        setShowDatePopup(prev => !prev);
    }

    function handleSelectedDate(selectedDate){
        setPopupDate(selectedDate);
        closeDatePopup();
    }

    function handleKeyDown(e){
        if(e.key === 'Escape'){
            setShowDatePopup(false);
        }
    } 

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return(
        <div className='DateCon' onClick={closeDatePopup}>
            <div className="followingDates" onClick={(e) => e.stopPropagation()}>
                <button className="today" onClick={() => handleSelectedDate(currentDate)}><span className="date">{currentDate.getDate()}</span><span className="name">Today</span></button>
                <button className="tomorrow" onClick={() => handleSelectedDate(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000))}><span className="date">{currentDate.getDate() + 1}</span><span className="name">Tomorrow</span></button>
                <button className="weekend" onClick={() => handleSelectedDate(nextSaturday)}><span className="date">{weekend}</span><span className="name">Weekend</span></button>
                <button className="nextWeek" onClick={() => handleSelectedDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000))}><span className="date">{currentDate.getDate() + 7}</span><span className="name">Next Week</span></button>
            </div>
        </div>
    );
}