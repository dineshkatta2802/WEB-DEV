import React, { useRef, useState } from 'react';

export default function App(){
    const [startTime, setStartTime] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const timerRef = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now());
        setCurrentTime(Date.now());

        clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setCurrentTime(Date.now());
        }, 10);
    }

    const handleStop = () => {
        clearInterval(timerRef.current);
    }

    const elapsedTime = (currentTime - startTime) / 1000;

    return(
        <div>
            <h1>{elapsedTime}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}