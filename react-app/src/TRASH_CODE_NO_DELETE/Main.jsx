import React, { useEffect, useRef, useState } from 'react';
import './Style.css';

export default function Main(){
    const [Position, setPosition] = useState({x:0, y:0});
    const [isDragging, setIsDragging] = useState(false);

    const eleRef = useRef(null);
    // Having a temp offset reference
    const grabOffset = useRef({x : 0, y : 0});

    const handleMouseDown = (e) => {
        setIsDragging(true);

        if(eleRef.current){
            const rect = eleRef.current.getBoundingClientRect();

            // Storing the clicked position in temp variables
            grabOffset.current = {
                x : e.clientX - rect.left,
                y : e.clientY - rect.top,
            }
        }
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            if(!isDragging)  return;

            const newX = e.clientX - grabOffset.current.x;
            const newY = e.clientY -  grabOffset.current.y;

            // Boundary restrictions
            const eleRect = eleRef.current.getBoundingClientRect();
            const mainRect = eleRef.current.parentElement.getBoundingClientRect();

            const minX = 0;
            const maxX = mainRect.width - eleRect.width;
            const clampedX = Math.max(minX, Math.min(newX, maxX));

            const minY = 0;
            const maxY = mainRect.height - eleRect.height;
            const clampedY = Math.max(minY, Math.min(newY, maxY));

            setPosition({x : clampedX, y : clampedY});
        }

        const handleMouseUp = () => {
            setIsDragging(false);
        }

        if(isDragging){
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging])


    const style = {
        position : 'absolute',
        left :`${Position.x}px`,
        top : `${Position.y}px`,
        animation:isDragging ? 'none' : 'bounce-top .9s both',
    }

    return(
        <>
            <div className='MainCon'>
                <div style={style} ref={eleRef} className='ele' onMouseDown={handleMouseDown}></div>
            </div>
        </>
    );
}