import React, { useState } from 'react';
// Images 
import ClearImg from './Clear.jpg';
import RainImg from './Rain.jpg';
import CloudyImg from './Cloudy.jpg';
import ThunderImg from './Thunder.jpg';
import MistImg from './Mist.jpg';

const bgImages = {
    Clear : ClearImg,
    Rain : RainImg,
    Cloudy : CloudyImg,
    Thunder : ThunderImg,
    Mist : MistImg
}

export default function WeatherDashboard(){
    const bgImg = bgImages.Clear;

    const [climateCondition, setClimateCondition] = useState("Clear");

    connst bgImg = bgImages[climateCondition] || ClearImg;

    return(
        <div className='WDCon' style={{ "--bgImg": `url("${bgImg}")` }}>
            
        </div>
    );
}