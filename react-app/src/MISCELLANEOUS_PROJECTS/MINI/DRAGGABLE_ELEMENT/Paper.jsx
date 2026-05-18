import React, { useEffect, useRef, useState } from 'react';
import './Style.css'

export default function Paper() {
    // Grid Size
    const gridSize = 20;

    const [isDragging, setIsDragging] = useState(false);

    // Initial position
    const positionRef = useRef({x : 0, y : 0});
    // Where the element is grabbed/clicked/touched
    const grabOffset = useRef({x : 0, y : 0});
    // The elements reference
    const eleRef = useRef(null);
    // Request Animation Frame
    const rafRef = useRef(null);

    // RAF Loop
    const update =() => {
        if(!eleRef.current) return;
        eleRef.current.style.transform =`translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        // Updates the eleRef every frame
        rafRef.current = requestAnimationFrame(update);
    }

    // Position persistence - localStorage
    useEffect(() => {
        const savedPosition = localStorage.getItem('PaperPosition');
        if(savedPosition){
            positionRef.current = JSON.parse(savedPosition);
            eleRef.current.style.transform =`translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        }
    }, [])

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

            positionRef.current = {x : clampedX, y : clampedY};

        }
        
        // Mouse Up
        const handleMouseUp = () => {
            // Snapping to the Grid
            const snappedX = Math.round(positionRef.current.x / gridSize) * gridSize;
            const snappedY = Math.round(positionRef.current.y/ gridSize) * gridSize;
            eleRef.current.style.transform =`translate(${snappedX}px, ${snappedY}px)`;

            positionRef.current = {
                x: snappedX,
                y: snappedY
            };

            // Saved Position
            localStorage.setItem('PaperPosition',JSON.stringify(positionRef.current));

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

return (
    <div ref={eleRef} className='paperCon' onMouseDown={handleMouseDown}>
    </div>
    );
}