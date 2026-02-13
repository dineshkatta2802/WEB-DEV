import React, { useState } from 'react';
import './FP.css'

export default function FontPlayground(){
    const [size, setSize] =  useState(10);
    const [weight, setWeight] = useState(400);
    const [spacing, setSpacing] = useState(0);
    const [family , setFamily] = useState("");

    const fontStyle = {
        fontSize : `${size}px`,
        fontWeight : weight,
        letterSpacing : `${spacing}em`,
        fontFamily: family
    }

    return( 
        <div className='FPCon'>
            <div className="playground"></div>
            <div className="grid"></div>

            <h1 className='heading'>FONT - PLAYGROUND</h1>

            <div className="controls">
                <span>
                    <label htmlFor="block"> Size : {size}px</label>
                    <input type="range" min={1} max={50} value={size} onChange={(e) => setSize(e.target.value)}/>
                </span>
                
                <span>
                    <label htmlFor="block"> Weight : {weight}px</label>
                    <input type="range" min={200} max={1000} value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </span>
                
                <span>
                    <label htmlFor="block"> Spacing : {spacing}px</label>
                    <input type="range" min={0} max={10} value={spacing} onChange={(e) => setSpacing(e.target.value)}/>
                </span>
                
                <span>
                    <label htmlFor="block"> Font-Family : {family}</label>
                    <select value={family} onChange={(e) => setFamily(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Trebuchet MS">Trebuchet MS</option>
                        <option value="Impact">Impact</option>
                    </select>
                </span>
            </div>

            <div className="preview">
                <p style={fontStyle}>
                    This is the preview text
                </p>
            </div>
        </div>
    );
}