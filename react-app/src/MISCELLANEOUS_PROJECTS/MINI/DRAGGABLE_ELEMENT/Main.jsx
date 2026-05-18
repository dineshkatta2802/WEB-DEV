import React, { useState } from 'react';
import { ThemeContext } from './Theme';
import GarbageCon from './Garbage_Container';
import './Style.css';

export default function Main() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={theme}>
            <GarbageCon title={'Garbage Collector!!!'}/>
            <i>This is a garbage collector project</i>
        </ThemeContext.Provider>
    );
}