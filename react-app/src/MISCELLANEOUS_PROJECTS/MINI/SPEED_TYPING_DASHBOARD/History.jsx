import React, { useContext, useState } from 'react';
import { HistoryContext } from './History_context';
import './HistoryStyle.css';


export default function History(){
    const {history} = useContext(HistoryContext);


    return(
        <div className='hisCon'>
            <h1>Drafts</h1>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}