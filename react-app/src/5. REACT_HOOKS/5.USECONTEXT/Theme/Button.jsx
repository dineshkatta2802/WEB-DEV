import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import './Style.css'

export default function Button({children}){
    const theme = useContext(ThemeContext);
    const className = 'button-'+theme;
    return(
        <button className={`btn ${className}`}>
            {children}
        </button>
    );
}