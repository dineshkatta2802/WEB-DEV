import React, { useState } from 'react';
import { Theme } from './Theme';

export default function ThemeProvider({children}){
    const [theme, themeToggle] = useState('light');

    return(
            <Theme value={[theme, themeToggle]}>
                {children}
            </Theme>
    );
}