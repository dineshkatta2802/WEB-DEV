import React, { useContext } from 'react';
import { Theme } from './Theme';

export default function Footer(){
        const [mode, setMode] = useContext(Theme);

    return(
        <div
        style={{
                width : '100%',
                height  :'100%',
                display : 'flex',
                justifyContent : 'center',
                alignItems  :'center',
                flexDirection : 'column',
                color : mode === 'light'? 'white' : 'black',
                border : mode === 'light'? '' : '2px solid black',
                backgroundColor : mode === 'light'? 'black' : 'white',
            }}>
            <h1>FOOTER</h1>
            <span>Mode in Footer : {mode}</span>
            <button onClick={() => setMode(prev => (prev === 'light')? 'dark': 'light')}>Change Mode</button>
        </div>
    );
}