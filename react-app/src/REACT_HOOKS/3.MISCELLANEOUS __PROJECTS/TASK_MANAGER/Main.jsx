import React, {useState, useRef} from 'react';
import './Main.css';
import Calendar from './CALENDAR/Calendar';
import Pomodoro from './POMODORO/Pomodoro';
import Todo from './TODO_INPUT/Todo';
import TodoList from './TODO_LIST/TodoList';

let nextId = 1;

export default function GlassMorphism(){
// ----------------------LIFTING ALL THE FILES STATES TO THE MAIN COMPONENT-------------------
//------------------------------------------------------NavDate.jsx----------------------------------------------------------------------
    // Array of months in a Year
    const monthsOfYear = [
        'January',
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ];
    
//------------------------------------------------------TodoList.jsx---------------------------------------------------------------
    // Now we will create a atate to manage the more button when we click it has to open controls and has to close on another click 
    //but since we have got mutiple buttons upon clikcing the single more button on any task's more button it opens controls for all the tasks 
    //but you want ot open for the specific task u clicked right 
    //so we will create a state with an id of the task whose controls are to be shown
    const [showControls, setShowControls] = useState({}); // curernly empty objects mean the 
    const [task, setTask] = useState(''); //For Todo.jsx
    const [eventTask, setEventTask] =  useState(''); // For EventPopup.jsx
    const [eventTime, setEventTime] = useState({hours : '00', minutes : '00'});
    const [list, setList] = useState([]);

    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    function handleDuplicate(id){
        setList(prev => {
            const Og = prev.find(item => item.id === id)
            return [
                ...prev,
                {
                    ...Og,
                    id : nextId++
                }
            ]
        })
    }

    function startEditing(id, name) {
    setEditingId(id);
    setEditingText(name);
    }

    function saveEdit(id) {
        setList(prev => 
            prev.map(item => 
                item.id === id ? {...item, name: editingText} : item
            )
        );

        setEditingId(null);
        setEditingText('');
    }


    // Here we will create a function that will take the id of the task whose more button is clicked
    function handleMoreClick(itemId){
        // now we will toggle the specific id's controls
        setShowControls(prev => (
            {
                ...prev, // keeping the previous state intact for the rest of the tasks
                [itemId] : !prev[itemId]  // toggling the specific id's controls
            }
        ));
    }

    function handleChange(e){
        setTask(e.target.value);
    }

    function handleEventChange(e){
        setEventTask(e.target.value);
    }

    function add() {
    // Check if task is empty
    if (task.trim() === '') {
        alert('Enter the task');
        return;
    }

        // Perform state updates for adding a task
        setList(prevlist => [
            ...prevlist,
            {
                id: nextId++, 
                name: task,
                time:includeDueTime ? { 
                    hours: `${eventTime.hours.padStart(2, '0')}`,
                    minutes: `${eventTime.minutes.padStart(2, '0')}`
                } : null,
                date: includeDateTime ? popupDate : null
            }
        ]);
        setTask(''); // Reset the task input field
        setEventTime({ hours: '00', minutes: '00' }); // Reset time picker
        setShowControls({});
    }

    // For the EventPopup.jsx
    function addTaskFromPopup(){
        if(eventTask.trim() === ''){
            alert('Enter the task');
            return;
        }

    setList([
            ...list,
            {   
                id: nextId++, 
                name: eventTask ,
                time : {hours : `${eventTime.hours.padStart(2, '0')}`, minutes : `${eventTime.minutes.padStart(2, '0')}`},
                date : selectedDate
            },
        ]);
        setEventTask(''); // resetting the textarea to empty
        setEventTime({hours : '00', minutes : '00'});
    }

    function clear(){
        setList([]);
        nextId = 1;
    }


// -----------------------------------------------------Calendar & Days.jsx---------------------------------------------------------------
    // Date Object
    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [showEventPopup, setShowEventPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState(currentDate);
    // ------------------------------------------------------Days.jsx ↓
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
        setShowEventPopup(true);
        // Set the intial time to 00:00
        setEventTime({hours : '00', minutes : '00'});  
        // Create a new Date object for the clicked day 
        const newSelectedDate = new Date(currentYear, currentMonth, day);
        setSelectedDate(newSelectedDate);
    }

    //Props to send to Calendar component
    const CalendarProps = {
        currentMonth,
        setCurrentMonth,
        currentYear,
        setCurrentYear,
        currentDate,
        showEventPopup,
        setShowEventPopup,
        getNoOfDaysInMonth,
        getFirstWeekDayOfMonth,
        handleDayClick,
        handleEventChange,
        addTaskFromPopup,
        eventTask,
        eventTime,
        setEventTime,
        monthsOfYear
    };

    //Props to send to TodoList component
    const TodoListProps ={
        list,
        showControls,
        handleMoreClick,
        setList,
        editingId,
        editingText,
        setEditingId,
        setEditingText,
        handleDuplicate,
        startEditing,
        saveEdit
    }

// -----------------------------------------------------Todo.jsx---------------------------------------------------------------
    const [showDatePopup, setShowDatePopup] = useState(false);
    const [showPriorityPopup, setShowPriorityPopup] = useState(false);
    const [showDueTimePopup, setShowDueTimePopup] = useState(false);

    const [popupDate, setPopupDate] = useState();

    const [includeDueTime, setIncludeDueTime] = useState(false);
    const [includeDateTime, setIncludeDateTime] = useState(false);


    //Props to send to Todo component
    const TodoProps ={
        add,
        clear,
        handleChange,
        task,
        showDatePopup,
        setShowDatePopup,
        currentDate,
        showPriorityPopup,
        setShowPriorityPopup,
        showDueTimePopup,
        setShowDueTimePopup,
        eventTime,
        setEventTime,
        popupDate, 
        setPopupDate, 
        includeDueTime, 
        includeDateTime, 
        setIncludeDueTime, 
        setIncludeDateTime
    }

    return(
        <div className='Glass' >
            <Calendar {...CalendarProps} addTaskFromPopup={addTaskFromPopup} />
            <div className="Schedulers">
                <div className="customize">
                    <Todo {...TodoProps}/>
                    <TodoList {...TodoListProps}/>
                </div>
                <Pomodoro/>
            </div>
        </div>
    );
}
