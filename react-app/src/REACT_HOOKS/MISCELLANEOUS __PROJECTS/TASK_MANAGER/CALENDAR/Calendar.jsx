import NavDate from './COMPONENTS/NavDate';
import WeekDays from './COMPONENTS/Weekdays';
import Days from './COMPONENTS/Days';
import './Calendar.css';

export default function Calendar({currentMonth, setCurrentMonth, currentYear, setCurrentYear, currentDate, showEventPopup, setShowEventPopup, getNoOfDaysInMonth, getFirstWeekDayOfMonth, handleDayClick, handleEventChange, addTaskFromPopup, eventTask, eventTime,setEventTime, monthsOfYear}) {
    return (
        <div className={`CalendarCon ${showEventPopup ? 'dimmed' : ''}`}>
            <h1 className="heading">Calendar</h1>

            <NavDate currentMonth={currentMonth} currentYear={currentYear} setCurrentMonth={setCurrentMonth} setCurrentYear={setCurrentYear} monthsOfYear={monthsOfYear}/>

            <WeekDays />

            <Days getNoOfDaysInMonth={getNoOfDaysInMonth} getFirstWeekDayOfMonth={getFirstWeekDayOfMonth} handleDayClick={handleDayClick} currentMonth={currentMonth} currentYear={currentYear} currentDate={currentDate} showEventPopup={showEventPopup} setShowEventPopup={setShowEventPopup} handleEventChange={handleEventChange} addTaskFromPopup={addTaskFromPopup} eventTask={eventTask} eventTime={eventTime} setEventTime={setEventTime}/>
        </div>
    );
}


// -------------------------------------------------------------OG-Code---------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import './Calendar.css';

// export default function Calendar() {
//     // Arrays of the days in a week
//     const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     // Array of months in a Year
//     const monthsOfYear = [
//         'January',
//         'February', 
//         'March', 
//         'April', 
//         'May', 
//         'June', 
//         'July', 
//         'August', 
//         'September', 
//         'October', 
//         'November', 
//         'December'
//     ];

//     // Date Object
//     const currentDate = new Date();

//     const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
//     const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
//     const [selecteddate , setSelectedDate] = useState(currentDate);
//     const [showEventPopup, setShowEventPopup] = useState(false);

//     // In JS the Date Object takes "new Date(year, monthIndex, day)" as parameters
//     // *** currentYear : Gives us the current year 
//     // *** currentMonth + 1 :and since in JS the months index starts from zero we add 1 to it
//     // *** currentDate : it gives us the date of the month from 1-31
//     // ***** Note :  if u pass '0' in the Date parameter we get last date of the previous month so we add 1 to get the current month
//     // Finally the 'getDate' method returns the date of the month
//     const getNoOfDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//     // lets create another Date object to know the first day name of the month
//     // It returns the index values
//     const getFirstWeekDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

//     // lets create a function to navigate among the months
//     function previousMonth(){
//         setCurrentMonth((MonthNo) => (MonthNo === 0 ? 11 : MonthNo-1))
//                         // 10(Nov) => if MonthNo === 0(Jan) setCurrentMonth to 11(Dec)
//                         //            else setCurrentMonth to previous month i.e 9(October)
//         // Now waht  if i decrese the month 0(Jan) of this year we need to get the previous year 11(Dec) right So...
//         setCurrentYear((YearNo) => (currentMonth === 0 ? YearNo-1 : YearNo));
//                         // 2025 => if currentMonth === 0(Jan) setCurrentYear() to previous year 2024
//                         //         else  keep the year number as it is!
//     }

//     // lets create a function to navigate among the months
//     function nextMonth(){
//         setCurrentMonth((MonthNo) => (MonthNo === 11 ? 0 : MonthNo+1))
//                         // 10(Nov) => if MonthNo === 11(Dec) setCurrentMonth to 0(Jan)
//                         //            else setCurrentMonth to previous month i.e 11(Dec)
//         // Now waht  if i increse the month 11(Dec) of this year we need to get the next year 0(Jan) right So...
//         setCurrentYear((YearNo) => (currentMonth === 11 ? YearNo+1 : YearNo));
//                         // 2025 => if currentMonth === 11(Dec) setCurrentYear() to next year 2026
//                         //         else  keep the year number as it is!
//     }

//     function handleDayClick(day){
//         const clickedDate = new Date(currentYear, currentMonth, day);
//         setSelectedDate(clickedDate);
//         setShowEventPopup(true)
//     }

//     function closeEventPopup(){
//         setShowEventPopup(false);
//     }

//     console.log(currentMonth + 1)

//     return (
//         <div className='CalendarCon'>
//             <h1 className="heading">Calendar</h1>

//             <div className="navigation-date">
//                 <h2 className="month">{monthsOfYear[currentMonth]}</h2>
//                 <h2 className="year">{currentYear}</h2>
//                 <div className="navigation-date-btns">
//                     <button className="btn-chevron-left" onClick={previousMonth}>
//                         <i class="fa-solid fa-chevron-left"></i>
//                     </button>
//                     <button className="btn-chevron-right" onClick={nextMonth}>
//                         <i class="fa-solid fa-chevron-right"></i>
//                     </button>
//                 </div>
//             </div>

//             <div className="weekdays">
//                 {/* <span>Sun</span>
//                 <span>Mon</span>
//                 <span>Tue</span>
//                 <span>Wed</span>
//                 <span>Thu</span>
//                 <span>Fri</span>
//                 <span>Sat</span> */}

//                 {daysOfWeek.map(day => (
//                     <span key={day}>{day}</span>
//                     // Sun Mon Tue Wed Thu Fri Sat
//                 ))}
//             </div>

//             <div className="days">
//                 {[...Array(getFirstWeekDayOfMonth).keys()].map((_,index) => (
//                     <span key={`empty-${index}`}/>
//                 ))}
//                 {/* 
//                 Array[getFirstWeekdayOfMonth] = create a new empty array of length "getFirstDaoOfMonth" which can be from 0 to 6
//                 ex) getFirstDayOfMonth = 3 then Array(3) = [ , , ]

//                 ...(Spread Syntax) = helps you expand the array into actual elements so you can use methods like map or filter
//                 without the spread syntax u cannot use the map function bcoz it has got no defined elements

//                 Therefore [...Array(getFirstDayOfMonth)] => [undefined, undefined, undefined]

//                 .keys() = returns an iterator of index numbers so [...Arraay(3)] = [0, 1, 2];

//                 .map() = to loop over over the array

//                 (_ , index) = _ : element value we ignore and index for React to have acess

//                 Therefore the final output is like 
//                 [...Array(getFirstDayOfMonth)] => [...Array(3)] => [undefined, undefined, undefined] => [0, 1, 2]
//                 <spn key = {empty-0}></spn>
//                 <spn key = {empty-1}></spn>
//                 <spn key = {empty-2}></spn>
//                 */}

//                 {[...Array(getNoOfDaysInMonth).keys()].map(day => (
//                     <span key={day+1} className={day+1 === currentDate.getDate() && 
//                                                             currentMonth === currentDate.getMonth() &&
//                                                             currentYear === currentDate.getFullYear() ? 'current-date' : ''}
//                                                             onClick={() => handleDayClick(day+1)}>{day+1}</span>
//                 ))}

//                 {showEventPopup && 
//                 <div className="event-popup">
//                     <div className="time-input">
//                         <div className="event-popup-time">Time</div>
//                         <input type="number" name="hours" min={0} max={24} className='hours'/>
//                         <p>:</p>
//                         <input type="number" name="minutes" min={0} max={60} className='minutes' />
//                     </div>
//                     <textarea name="textarea" placeholder='Enter event info...'></textarea>
//                     <button className="event-popup-btn">Add Event</button>
//                     <button className="close-event-popup" onClick={closeEventPopup}><i className="fa-solid fa-xmark" aria-hidden="true"></i></button>
//                 </div>
//                 }
//             </div>
//         </div>
//     );
// }


