import React from 'react';
import EventPopup from './EventPopup.jsx';
import '../Calendar.css';

export default function Days({currentMonth, currentYear, currentDate, showEventPopup, setShowEventPopup}){    // In JS the Date Object takes "new Date(year, monthIndex, day)" as parameters
    // *** currentYear : Gives us the current year s
    // *** currentMonth + 1 :and since in JS the months index starts from zero we add 1 to it
    // *** currentDate : it gives us the date of the month from 1-31
    // ***** Note :  if u pass '0' in the Date parameter we get last date of the previous month so we add 1 to get the current month
    // Finally the 'getDate' method returns the date of the month
    const getNoOfDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // lets create another Date object to know the first day name of the month
    // It returns the index values
    const getFirstWeekDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

        function handleDayClick(day){
            // Show popup for any clicked day
            setShowEventPopup(true)
        }


    return(
            <div className="days">
                {[...Array(getFirstWeekDayOfMonth).keys()].map((_,index) => (
                    <span className='inactive' key={`empty-${index}`}/>
                ))}
                {/* 
                Array[getFirstWeekdayOfMonth] = create a new empty array of length "getFirstDaoOfMonth" which can be from 0 to 6
                ex) getFirstDayOfMonth = 3 then Array(3) = [ , , ]

                ...(Spread Syntax) = helps you expand the array into actual elements so you can use methods like map or filter
                without the spread syntax u cannot use the map function bcoz it has got no defined elements

                Therefore [...Array(getFirstDayOfMonth)] => [undefined, undefined, undefined]

                .keys() = returns an iterator of index numbers so [...Arraay(3)] = [0, 1, 2];

                .map() = to loop over over the array

                (_ , index) = _ : element value we ignore and index for React to have acess

                Therefore the final output is like 
                [...Array(getFirstDayOfMonth)] => [...Array(3)] => [undefined, undefined, undefined] => [0, 1, 2]
                <spn key = {empty-0}></spn>
                <spn key = {empty-1}></spn>
                <spn key = {empty-2}></spn>
                */}

                {[...Array(getNoOfDaysInMonth).keys()].map(day => (
                    <span key={day+1} className= {day+1 === currentDate.getDate() && 
                                                            currentMonth === currentDate.getMonth() &&
                                                            currentYear === currentDate.getFullYear() ? 'current-date' : ''}
                                                            onClick={() => handleDayClick(day+1)}>{day+1}</span>
                ))}

                {showEventPopup && <EventPopup setShowEventPopup={setShowEventPopup}/>}
            </div>
    );
}