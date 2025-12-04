import './Todo.css'
import DatePopup from './COMPONENTS/DatePopup';
// import PriorityPopup from './COMPONENTS/Priority';
import DueTimePopup from './COMPONENTS/Duetime';

export default function Todo({add, clear, handleChange, task, 
                                showDatePopup, setShowDatePopup, 
                                currentDate, setShowPriorityPopup, 
                                showDueTimePopup, setShowDueTimePopup, 
                                eventTime, setEventTime, popupDate, 
                                setPopupDate, includeDueTime, 
                                includeDateTime, setIncludeDueTime, 
                                setIncludeDateTime}){
    function handleDateClick(){
        setShowDatePopup(prev => !prev);
    }

    // function handlePriorityClick(){
    //     setShowPriorityPopup(prev => !prev);
    // }

    function handleDueTimeClick(){
        setShowDueTimePopup(prev => !prev);
    }

    return(
        <div className='TodoCon'>   
            <h1 className='heading'>Todo List</h1>

            <div className="eventInfo">
                <div className="eventInput">
                    <textarea placeholder='Enter event info...' value={task} onChange={handleChange} onKeyDown={(e) => {if(e.key === 'Enter'){add()}}}/>
                    <div className="btns">
                        <button className='eventAddBtn add' onClick={add} title='Add task to the list'>Add</button>
                        <button className='eventAddBtn clear' onClick={clear} title='Delete the whole list'>Clear</button>
                    </div>
                </div>

                <div className="eventInfoCustomization">
                    <input type="checkbox" checked={includeDateTime} onChange={() => setIncludeDateTime(prev => !prev)}/>
                    <button className="dateBtn" onClick={handleDateClick} disabled={!includeDateTime} title='Add date to the task'>Date <i className="fa-solid fa-calendar-days"></i></button>
                    {showDatePopup && (<DatePopup setShowDatePopup={setShowDatePopup} currentDate={currentDate} popupDate={popupDate} setPopupDate={setPopupDate}/>)}
                    {/* <button className="priorityBtn" onClick={handlePriorityClick}>Priority <i className="fa-solid fa-flag"></i></button>
                    {showPriorityPopup && <PriorityPopup setShowPriorityPopup={setShowPriorityPopup}/>} */}

                    <input type="checkbox" checked={includeDueTime} onChange={() => setIncludeDueTime(prev => !prev)}/>
                    <button className="clockBtn" onClick={handleDueTimeClick} disabled={!includeDueTime} title='Add deadline to the task'>Due-Time <i class="fa-solid fa-clock"></i></button>
                    {showDueTimePopup && (<DueTimePopup setShowDueTimePopup={setShowDueTimePopup} eventTime={eventTime} setEventTime={setEventTime} />)}
                </div>
            </div>
        </div>
    );
}