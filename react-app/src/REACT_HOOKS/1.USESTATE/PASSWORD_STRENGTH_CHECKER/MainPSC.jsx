import React from 'react';
import vediofile from './grid tunnel.mp4'
import Checker from './Checker';
import "./PSC.css"


export default function PSC(){
    return(
        <div className='PSCCon'>
        <video autoPlay muted loop playsInline id='vedio'>
            <source src={vediofile} type="video/mp4"/>
        </video>    

        <Checker/>

        </div>
    );
}