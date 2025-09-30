import React, { useState } from 'react';

export default function App(){
    const [position, setPosition] = useState({x : 0, y : 0})
    return(
        <div onPointerMove={ e => { 
                                    setPosition({
                                        x : e.clientX,
                                        y : e.clientY
                                    })

                                    console.log(e);
                                    }}

        style={{
            position : 'relative',
            width : '100%',
            height : '100vh'
        }}>
            <div style={{
                        position : 'absolute',
                        width : '50px',
                        height : '50px',
                        borderRadius : '50%',
                        transform : `translate(${position.x}px, ${position.y}px)`,
                        backgroundColor : 'crimson',
                        left : -25,
                        top : -25,
                        right : 0,
                        bottom : 0
            }}/>
        </div>
    );
}