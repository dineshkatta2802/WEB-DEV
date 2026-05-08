import React, { useState } from 'react';
import Keyboard from './Keyboard'
import UserInput from './UserInput';
import History from './History';
import './MainStyle.css';
import { HistoryContext } from './History_context';


const MainCon = {
    width : '100%',
    height  : '90vh',
    display : 'flex',
    alignItems : 'center',
    justifyContent  : 'center',
    flexDirection : 'row',
    gap : '5rem'
}

export default function Main(){
    const [history, setHistory] = useState([])

    return(
        <HistoryContext value={{history, setHistory}}>
            <div style={MainCon}>
                <div>
                    <UserInput/>
                    <Keyboard/>
                </div>

                <div>
                    <History/>
                </div>
            </div>
        </HistoryContext>
    );
}