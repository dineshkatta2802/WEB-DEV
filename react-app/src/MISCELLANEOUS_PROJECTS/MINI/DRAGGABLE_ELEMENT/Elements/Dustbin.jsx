import React from 'react';
import './Style.css';

export default function Dustbin() {
    return (
        <div className='Dustbin'>
            <div className="lid"></div>
            <div className="bin-body">
                <div className="stripes"></div>
            </div>
        </div>
    );
}