import React, { useEffect, useRef, useState } from 'react';

export default function Main(){
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('idle');
    const timerRef = useRef(null);

    const handleChange = (e) => {
        if(e.target.value.trim() === '') setStatus('idle');
        setStatus('Saving...');

        setInputText(e.target.value);

        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            setStatus('Success...');
        }, 1500);
    }

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    // useState(() => {
    //     setTimeout(() => {
    //     }, 3000);
    // }, [status])

    return(
        <div>
            <input type="text" value={inputText} onChange={handleChange} />
            {status}
        </div>
    );
}