import React, { useContext } from 'react';
import { ThemeContext } from './Main';

export default function FunctionContext(){
    const darkTheme = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor : darkTheme ? 'black' : 'grey',
        color : darkTheme ? 'white' : 'black',
        fontSize : '30px',
        width : '200px',
        height : '200px'
    }

    return(
        <div style={themeStyles}>
            Function Component
        </div>
    );
}