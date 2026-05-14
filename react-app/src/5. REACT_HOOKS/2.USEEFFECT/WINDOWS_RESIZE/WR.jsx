import React, { useEffect, useState } from 'react';

export default function WindowResize(){
    const Width = document.documentElement.clientWidth;
    const Height = document.documentElement.clientHeight;

    const [width, setWidth] = useState(Width); 
    const [height, setHeight] = useState(Height); 

    const handleResize = () => {
        setWidth(document.documentElement.clientWidth);
        setHeight(document.documentElement.clientHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return() =>window.removeEventListener('resize', handleResize);
    },[])

    return(
        <div>
            <h1>WINDOW RESIZED VALUES</h1>
            <h3>{width}</h3>
            <h3>{height}</h3>
        </div>
    );
}