import React, { useEffect, useState } from 'react';

export default function MouseTracker(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [])

    return(
        <div style={{width : '100%', height : '100vh'}}>
            <h1>Mouse Tracker</h1>
            <h3>{x}</h3>
            <h3>{y}</h3>
        </div>
    );
}