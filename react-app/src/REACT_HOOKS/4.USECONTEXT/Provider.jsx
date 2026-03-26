import React, { useState } from 'react';
import { Theme } from './Theme';

export default function THEME_PROVIDER({children}){
    const [theme, setTheme] = useState('light');

    return(
            <Theme.Provider value={[theme, setTheme]}>
                {children}
            </Theme.Provider>
    );
}