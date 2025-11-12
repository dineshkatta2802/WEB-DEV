import React from 'react';
import './Main.css';
import Calendar from './CALENDAR/Calendar';
import Pomodoro from './POMODORO/Pomodoro';
import Todo from './TODO_INPUT/Todo';
import Color from './TODO_LIST/TodoList';

export default function GlassMorphism(){
    return(
        <div className='Glass'>
            <Calendar/>
            <div className="Schedulers">
                <div className="customize">
                    <Todo/>
                    <Color/>
                </div>
                <Pomodoro/>
            </div>
        </div>
    );
}

/*
        <div style={{padding : '10px',display:'flex',justifyContent : 'center', alignItems : 'center',flexDirection : 'row', width :'90%', height : '90vh', backgroundColor : 'black', gap : '10px'}}>
            <div className='1' style={{backgroundColor : 'blue',height : '95%', display : 'flex', flex : '1'}}></div>
            <div className='2' style={{padding : '10px', backgroundColor : 'red', width : '40%', height : '95%', display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection: 'column', gap : '10px'}}>
                <div className='21' style={{backgroundColor : 'yellow', width : '95%', height : '50%'}}></div>
                <div className='22' style={{backgroundColor : 'green', width : '95%', height : 'auto'}}></div>
            </div>
        </div>
*/