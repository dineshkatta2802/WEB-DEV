import React, { useContext, useEffect, useRef, useState } from 'react';
import './InputStyle.css'
import { HistoryContext } from './History_context';

export default function UserInput(){
    const [inputText, setInputText] = useState('');
    const [isIdle, setIsIdle] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(0);
    const [status, setStatus] = useState('Not Saved');

    const idleTimerRef = useRef(null);
    const startTimerRef = useRef(null);
    const lastKeyStrokeRef = useRef(null);

    const {setHistory} = useContext(HistoryContext);

    const handleChange = (e) => {
        if(e.target.value === ''){
            setInputText('');
            setStatus('Idle');
            setTypingSpeed(0);
            startTimerRef.current = null;
            clearTimeout(idleTimerRef.current);
            return;
        };

        if(isIdle){
            setIsIdle(false)
            // setStatus('Idle')
        };
        setStatus('Saving');

        setInputText(e.target.value);

        
        if(startTimerRef.current === null){ // If startTimeRef not yet Started then start
            startTimerRef.current = Date.now(); // start once on first character
        }
        
        // Update last keystroke time on every change
        lastKeyStrokeRef.current = Date.now();

        const totalChars = e.target.value.length;
        //Total time taken
        const duration = (lastKeyStrokeRef.current - startTimerRef.current) / 1000;
        // Calculate Speed only if duration is greater than 0.1 seconds to avoid division by zero or very high speeds
        if(duration > .1){
            const speed = totalChars/duration;
            setTypingSpeed(speed);
        }

        // Idle Timer
        clearTimeout(idleTimerRef.current); // clear old keystroke timer
        idleTimerRef.current = setTimeout(() => {
            setIsIdle(true)
            startTimerRef.current = null;
            setTypingSpeed(0);
            setStatus('Saved');
        }, 2000); // start a new timer
        
    }
    
    useEffect(() => {
        return () => clearTimeout(idleTimerRef.current);
    }, []);
    
    // History Update Effect
    useEffect(() => {
        if(isIdle && inputText.trim() !== ''){
            setHistory(prev => [inputText, ...prev].slice(0, 5))
            setInputText('');
        }
    }, [isIdle, inputText, setHistory])

    return(<div className='MainCon'>
        <div className='UserInputCon'>
            <input value={inputText} type="text" onChange={handleChange} placeholder='Enter any value'/>
            <div className='spanCon'>
                <span>{isIdle ? 'Idle' : 'Typing'}</span>
                <span>Saving : {status}</span>
                <span>{typingSpeed.toFixed(1)}</span>
            </div>
        </div>
        {/* <div>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div> */}
        </div>
    );
}