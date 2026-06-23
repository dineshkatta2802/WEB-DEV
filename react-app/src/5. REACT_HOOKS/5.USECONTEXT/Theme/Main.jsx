import React, { useEffect, useState } from 'react';
import { ThemeContext } from './Theme';
import Form from './Form';

export default function Main(){
    const [theme, setTheme] = useState(() => { return localStorage.getItem('currentTheme') ||  'light'});
    useEffect(() => {
        localStorage.setItem('currentTheme', theme)
    },[theme])

    return(
        <ThemeContext.Provider value={theme}>
            <Form/>
            <label htmlFor="checkbox">
                Use dark mode
                <input type="checkbox"
                    checked = {theme === 'dark'} //checked is true only when the theme is dark
                    onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}/>
            </label>            
        </ThemeContext.Provider>
    );
} 