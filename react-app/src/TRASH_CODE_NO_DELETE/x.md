import React, { useEffect, useRef, useState } from 'react';

export default function UserInput(){
    const [inputText, setInputText] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [ currentTime, setCurrentTime] = useState(null);
    const [isIdle, setIsIdle] = useState(true);
    const charCount = useRef(null);
    const timerRef = useRef(null);
    const idleTimerRef = useRef(null);

    const handleInputChange = (e) => {
        // store it in the inputText
        setInputText(e.target.value);
        // Once started typing setIsIdle to false
        setIsIdle(false);

        // Reset Timer
        if(timerRef){
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        // Start the timer
        setStartTime(Date.now());
        timerRef.current = setInterval(() => {
            setCurrentTime(Date.now());
        },10)

        // Reset idleTimer
        if (idleTimerRef.current) {
            clearTimeout(idleTimerRef.current);
        }

        // setTimeout for 2 secs
        idleTimerRef.current = setTimeout(() => {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }, 2000)
    }

    const elapsedTime = (currentTime - startTime) / 1000;

    return(
        <div>
            <input type="text" onChange={handleInputChange}/>
            {isIdle ? <h2>Not Typing</h2> : <h2>Typing...</h2>}
            <h1>{elapsedTime.toFixed(2)}</h1>
        </div>
    );
}