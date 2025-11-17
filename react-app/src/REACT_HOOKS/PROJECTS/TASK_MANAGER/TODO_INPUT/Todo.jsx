import './Todo.css'
import DatePopup from './COMPONENTS/DatePopup';
import PriorityPopup from './COMPONENTS/Priority';
import DueTimePopup from './COMPONENTS/Duetime';

export default function Todo({add, clear, handleChange, task, 
                                showDatePopup, setShowDatePopup, 
                                currentDate, setShowPriorityPopup, 
                                showDueTimePopup, setShowDueTimePopup, 
                                eventTime, setEventTime, popupDate, 
                                setPopupDate}){
    function handleDateClick(){
        setShowDatePopup(prev => !prev);
    }

    function handlePriorityClick(){
        setShowPriorityPopup(prev => !prev);
    }

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
                        <button className='eventAddBtn add' onClick={add}>Add</button>
                        <button className='eventAddBtn clear' onClick={clear}>Clear</button>
                    </div>
                </div>

                <div className="eventInfoCustomization">
                    <button className="dateBtn" onClick={handleDateClick}>Date <i className="fa-solid fa-calendar-days"></i></button>
                    {showDatePopup && <DatePopup setShowDatePopup={setShowDatePopup} currentDate={currentDate} popupDate={popupDate} setPopupDate={setPopupDate}/>}
                    {/* <button className="priorityBtn" onClick={handlePriorityClick}>Priority <i className="fa-solid fa-flag"></i></button>
                    {showPriorityPopup && <PriorityPopup setShowPriorityPopup={setShowPriorityPopup}/>} */}
                    <button className="clockBtn" onClick={handleDueTimeClick}>Due-Time <i class="fa-solid fa-clock"></i></button>
                    {showDueTimePopup && <DueTimePopup setShowDueTimePopup={setShowDueTimePopup} eventTime={eventTime} setEventTime={setEventTime} />}
                </div>
            </div>
        </div>
    );
}