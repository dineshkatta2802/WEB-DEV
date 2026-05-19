import React from 'react';
import MyDrag from './MyDrag';
import Canvas from './Canvas';
import './Style.css';

export default function GarbageCon({title}) {

    return (
        <div className='garbageCon'>
            <header className='header'>
                <span className='dot'></span>
                <p className='title'>{title}</p>
            </header>
            <MyDrag>
                <Canvas/>
                {/* <TrashZone/> */}
            </MyDrag>
        </div>
    );
}