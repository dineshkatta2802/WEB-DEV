import React, { useEffect, useRef, useState } from 'react';
import './Style.css'

export default function Paper() {
    // const [Position, setPosition] = useState({x : 0, y : 25});
    const [isDragging, setIsDragging] = useState(false);

    const eleRef = useRef(null);
    const grabOffset = useRef({x : 0, y : 0});
    const positionRef = useRef({x : 0, y : 0});
    const rafRef = useRef(null);

    // RAF Loop
    const update =() => {
        if(!eleRef.current) return;
        eleRef.current.style.transform =`translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        // Updates the eleRef every frame
        rafRef.current = requestAnimationFrame(update);
    }

    // Mouse Down
    const handleMouseDown = (e) => {
        
        setIsDragging(true);
        
        if(eleRef.current){
            const rect = eleRef.current.getBoundingClientRect();
            
            grabOffset.current = {
                x : e.clientX - rect.left,
                y : e.clientY - rect.top
            }
        }

        rafRef.current = requestAnimationFrame(update);
    }

    useEffect(() => {
        // Mouse Move
        const handleMouseMove = (e) => {
            if(!isDragging) return;

            if (!eleRef.current || !eleRef.current.parentElement) return;
            const parentRect = eleRef.current.parentElement.getBoundingClientRect();

            const newX = e.clientX - parentRect.left - grabOffset.current.x;
            const newY = e.clientY - parentRect.top - grabOffset.current.y;

            // Boundary restrictions
            const minX = 0;
            const maxX = parentRect.width - eleRef.current.offsetWidth;
            const clampedX = Math.max(minX, Math.min(newX, maxX));

            const minY = 0;
            const maxY = parentRect.height - eleRef.current.offsetHeight;
            const clampedY = Math.max(minY, Math.min(newY, maxY));

            // setPosition({x : clampedX, y : clampedY});

            positionRef.current = {x : clampedX, y : clampedY};

            // window.localStorage.setItem('currentX',clampedX);
            // window.localStorage.setItem('currentY',clampedY);
        }

        // Mouse Up
        const handleMouseUp = () => {
            setIsDragging(false);
            cancelAnimationFrame(rafRef.current);
        }
        


        // Adding event listeners 
        if(isDragging){
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);

            
        }

        // Clean Up
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [isDragging]);

    // const style = {
    //     left  :`${Position.x}px`,
    //     top : `${Position.y}px`,
    // }

return (
    <div ref={eleRef} className='paperCon' onMouseDown={handleMouseDown}>
    </div>
    );
}