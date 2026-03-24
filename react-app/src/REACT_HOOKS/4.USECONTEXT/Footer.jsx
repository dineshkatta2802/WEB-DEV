import React, { useContext } from 'react';
import { Theme } from './Theme';

export default function Footer(){
        const [mode, setMode] = useContext(Theme);

    return(
        <div>
            <span>Mode in Footer : {mode}</span>
            <button onClick={() => setMode('dark')}>Change Mode</button>
        </div>
    );
}