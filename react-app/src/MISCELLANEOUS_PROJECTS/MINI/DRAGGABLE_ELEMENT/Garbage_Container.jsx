import React from 'react';
import Paper from './Paper';
import './Style.css';

export default function GarbageCon({title}) {
    return (
        <div className='garbageCon'>
            <header className='header'>
                <span className='dot'></span>
                <p className='title'>{title}</p>
            </header>
            <Paper/>
        </div>
    );
}