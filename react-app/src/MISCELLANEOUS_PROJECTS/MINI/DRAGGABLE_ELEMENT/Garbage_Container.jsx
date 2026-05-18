import React, { useState } from 'react';
import Paper from './Paper';
import './Style.css';

export default function GarbageCon({title}) {
    const [axisLock, setAxiLock] = useState('free');

    return (
        <div className='garbageCon'>
            <header className='header'>
                <span className='dot'></span>
                <p className='title'>{title}</p>
            </header>
            <Paper/>
            <footer>
                
            </footer>
        </div>
    );
}