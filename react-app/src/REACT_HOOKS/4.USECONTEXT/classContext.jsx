import React, { useContext } from 'react';
import { ThemeContext } from './Main';
import { width } from '@fortawesome/free-brands-svg-icons/fa11ty';

export default function ClassContext(){
    const darkTheme = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor : darkTheme ? 'black' : 'grey',
        color : darkTheme ? 'white' : 'black',
        fontSize : '30px',
        width : '200px',
        height : '200px'
    }

    return(
        <ThemeContext.Consumer>
            {darkTheme => {
                return(
                    <div style={this.themeStyles(darkTheme)}>Class Component</div>
                )
            }}
        </ThemeContext.Consumer>
    );
}