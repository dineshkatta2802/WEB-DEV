import React, { useEffect, useState } from 'react';

export default function Cursor(){
    const [position, setPosition] = useState({x : 0, y: 0});

    useEffect(() => {
        function handleMove(e){setPosition({x: e.clientX, y : e.clientY})} 

        window.addEventListener('pointermove', handleMove);

        return () => { window.removeEventListener('pointermove', handleMove)}
    }, []);

    return(
        <div
            style={{
                position : 'absolute',
                borderRadius : '50%',
                opacity : .5,
                height : '50px',
                width : '50px',
                backgroundColor : 'crimson', 
                transform  :`translate(${position.x}px, ${position.y}px)`,
                left : '-25px',
                top : '-25px',
                transition : 'transform .2s linear',
            }}>
            
        </div>
    );
}