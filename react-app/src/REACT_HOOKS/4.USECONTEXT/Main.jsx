import React, { useState } from 'react';
import ClassContext from './classContext';
import FunctionContext from './functionContext';
// First lets create a context component using the create.Context()
export const ThemeContext = React.createContext(); // the context is created

export default function Main(){
    const [darkTheme, setDarkTheme] =  useState(true);

    const handleTheme = () => {
        setDarkTheme(prev => !prev);// flase / true
    }

    return(
        <>
            {/* Passing down the props to the child components */}
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={handleTheme}>Dark Toggle</button>
                <ClassContext/>
                <FunctionContext/>
            </ThemeContext.Provider>  
        </>
    );
}