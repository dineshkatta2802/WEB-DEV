import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

export default function Panel({children, title}){
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return(
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    );
}