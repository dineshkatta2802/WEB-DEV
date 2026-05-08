import React from 'react';
import '../Calendar.css';

export default function NavDate({currentMonth, currentYear, setCurrentMonth, setCurrentYear, monthsOfYear}){
    // lets create a function to navigate among the months
    function previousMonth(){
        setCurrentMonth((MonthNo) => (MonthNo === 0 ? 11 : MonthNo-1))
                        // 10(Nov) => if MonthNo === 0(Jan) setCurrentMonth to 11(Dec)
                        //            else setCurrentMonth to previous month i.e 9(October)
        // Now waht  if i decrese the month 0(Jan) of this year we need to get the previous year 11(Dec) right So...
        setCurrentYear((YearNo) => (currentMonth === 0 ? YearNo-1 : YearNo));
                        // 2025 => if currentMonth === 0(Jan) setCurrentYear() to previous year 2024
                        //         else  keep the year number as it is!
    }

    // lets create a function to navigate among the months
    function nextMonth(){
        setCurrentMonth((MonthNo) => (MonthNo === 11 ? 0 : MonthNo+1))
                        // 10(Nov) => if MonthNo === 11(Dec) setCurrentMonth to 0(Jan)
                        //            else setCurrentMonth to previous month i.e 11(Dec)
        // Now waht  if i increse the month 11(Dec) of this year we need to get the next year 0(Jan) right So...
        setCurrentYear((YearNo) => (currentMonth === 11 ? YearNo+1 : YearNo));
                        // 2025 => if currentMonth === 11(Dec) setCurrentYear() to next year 2026
                        //         else  keep the year number as it is!
    }

    return(
            <div className="navigation-date">
                <h2 className="month">{monthsOfYear[currentMonth]}</h2>
                <h2 className="year">{currentYear}</h2>
                <div className="navigation-date-btns">
                    <button className="btn-chevron-left" onClick={previousMonth}>
                        <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button className="btn-chevron-right" onClick={nextMonth}>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
    );
}