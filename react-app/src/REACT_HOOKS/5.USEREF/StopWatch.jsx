import React, { useRef, useState } from 'react';

export default function StopWatch(){
    const [startTime, setStartTime] = useState(null);
    const [now , setNow] = useState(null);
    const intervalRef = useRef(0);

    const handleStart = () => {
        setStartTime(Date.now()); // StopWatch Started time 
        setNow(Date.now()); // Current time 

        clearInterval(intervalRef.current); // Stops any previous running timer 

        // Constantly updating the 'now' - current time to calc 
        // every 10s it gets updated constantly i.e 
        // the value of the now get updated constantly every 10ms
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
    }

    const handleReset = () => {
        setStartTime(null);
    }

    let secondsPassed = 0;
    if(startTime !== null && now !== null ){
        secondsPassed = (now - startTime)/ 1000;
    }

    return(
        <div>
            <h1>Time Passed : {secondsPassed.toFixed(3)}</h1>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}