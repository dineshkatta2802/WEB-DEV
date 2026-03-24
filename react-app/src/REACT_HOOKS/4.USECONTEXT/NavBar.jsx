import React, { useContext} from 'react';
import { Theme } from './Theme';

export default function NavBar(){
    const [mode, setMode] = useContext(Theme);

    return(
        <div>
            <span>Mode in NavBar : {mode}</span>
            <button onClick={() => setMode('dark')}>Change Mode</button>
        </div>
    );
}