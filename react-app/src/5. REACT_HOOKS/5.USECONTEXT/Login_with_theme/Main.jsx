import React, { useState } from 'react';
import MyProvider from './MyProvider';
import WelcomePanel from './WelcomePanel';

export default function Main(){
    const [theme, setTheme] = useState('light');

    return(
        // Here we are passing the theme and setTheme
        // just like props. Not passing like the useContext
        <MyProvider theme={theme} setTheme={setTheme}>
            <WelcomePanel/>
            <label>
                {theme === 'light' ? 'Dark' : 'Light'}
                <input type="checkbox" 
                checked={theme === 'dark'}
                onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
                />
                Use Dark Mode
            </label>
        </MyProvider>
    );
}