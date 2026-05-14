import React, { useState } from 'react';
import './Theme.css'

export default function ThemeSwitcher(){
    const [theme, setTheme] =  useState(false);

    function handleClick(){
        setTheme(!theme);

        document.body.style.backgroundColor = !theme ? 'white' : 'balck';
        document.body.style.backgroundColor = theme ? 'black' : 'white';
        
    }

    return(
        <div>
            <button onClick={handleClick}>{theme ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}</button>
        </div>
    );
}