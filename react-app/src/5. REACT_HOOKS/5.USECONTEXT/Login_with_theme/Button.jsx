import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

export default function Button({children, disabled, onClick}){
    const theme = useContext(ThemeContext);
    const className = 'button-'+theme;
    return(
        <div
        className={className}
        disabled = {disabled}
        onClick={onClick}>
            {children}
        </div>
    );
}