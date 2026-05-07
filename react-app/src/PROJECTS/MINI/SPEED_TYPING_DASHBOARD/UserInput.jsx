import React, { useEffect, useRef, useState } from 'react';
import './InputStyle.css'

export default function UserInput(){
    const [inputText, setInputText] = useState('');
    const [isIdle, setIsIdle] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(0);
    const idleTimerRef = useRef(null);
    const startTimerRef = useRef(null);
    const lastKeyStrokeRef = useRef(null);


    const handleChange = (e) => {
        if(e.target.value === ''){
            setInputText('');
            setTypingSpeed(0);
            startTimerRef.current = null;
            clearTimeout(idleTimerRef.current);
            return;
        };

        if(isIdle) setIsIdle(false);

        setInputText(e.target.value);

        lastKeyStrokeRef.current = Date.now();

        //Total time taken
        if(startTimerRef.current === null){ // If startTimeRef not yet Started then start
            startTimerRef.current = Date.now(); // start once on first character
        }
        // console.log('Start : ',(startTimerRef.current - startTimerRef)/1000);
        // console.log('Current : ',(lastKeyStrokeRef.current - startTimerRef.current)*10/1000)

        const totalChars = e.target.value.length;
        const duration = (lastKeyStrokeRef.current - startTimerRef.current) / 1000;
        if(duration > .1){
            const speed = totalChars/duration;
            setTypingSpeed(speed);
        }

        // Idle Timer
        clearTimeout(idleTimerRef.current); // clear old keystroke timer
        idleTimerRef.current = setTimeout(() => {
            setIsIdle(true)
            startTimerRef.current = null;
        }, 2000); // start a new timer

    }

    useEffect(() => {
        return () => clearTimeout(idleTimerRef.current);
    }, [])

    return(
        <div className='UserInputCon'>
            <input value={inputText} type="text" onChange={handleChange} placeholder='Enter any value'/>
            <div className='spanCon'>
                <span>{isIdle ? 'Idle' : 'Typing'}</span>
                <span>{typingSpeed.toFixed(1)}</span>
            </div>
        </div>
    );
}