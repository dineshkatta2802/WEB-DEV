import React, { useState } from 'react';
import { ThemeContext } from './Theme';
import { UserContext } from './User';

export default function MyProvider({theme, setTheme, children}){
    const [currentUser, setCurrentUser] = useState(null);

    return(
        <ThemeContext.Provider value={theme}>
            <UserContext value={{currentUser, setCurrentUser}}>
                {children}
            </UserContext>
        </ThemeContext.Provider>
    );
}