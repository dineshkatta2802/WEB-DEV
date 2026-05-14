import React, { useEffect, useState } from 'react';
import './KeyBoardStyle.css';

export default function Keyboard(){
    // let KeyBoardCon = document.querySelector('.KeyBoardCon');
    let Keyboard_Keys = [
        '1234567890'.split(''),
        'qwertyuiop'.split(''),
        'asdfghjkl'.split(''),
        'zxcvbnm'.split(''),
    ];

    const [pressedKey, setPressedKey] = useState(null);

    const handleClick = (key) => {
        setPressedKey(key);
        setTimeout(() => setPressedKey(null),100)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            const Keydown = e.key.toLowerCase();
            setPressedKey(Keydown);
            setTimeout(() => setPressedKey(null), 100);
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [])



    return(
        <div className='KeyBoardCon'>
            {
                Keyboard_Keys.map((row, rowIndex) => (
                    <div className='Row' key={rowIndex}>
                        {
                            row.map((key, index) => (
                                <div key={index} onClick={() => handleClick(key)} className={`Key ${pressedKey === key ? 'active' : ''}`}>
                                    <span data-key={key} className={key}>
                                        {key.toUpperCase()}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}