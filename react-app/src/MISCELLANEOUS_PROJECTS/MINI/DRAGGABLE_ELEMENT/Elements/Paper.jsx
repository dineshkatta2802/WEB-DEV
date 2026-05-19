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

// ---------- FAQ'S ----------

/**
1) Why use useRef for position instead of useState?

Using useRef allows us to store mutable values that persist across renders without causing re-renders when they change. 
In this case, positionRef holds the current position of the element, and we can update it directly without triggering a re-render of the component. 
This is crucial for performance, especially during dragging, as we want to update the position smoothly without unnecessary re-renders.

-----

2) Why use requestAnimationFrame (RAF)?

requestAnimationFrame (rAF) is the browser's way of saying: "tell me what you want drawn, and I'll do it at the best possible moment — right before I paint the screen."

The browser has a paint cycle tied to your monitor's refresh rate. 
At 60hz, that's every ~16.67ms. rAF gives you a callback slot that runs at the start of each frame, before the GPU composites anything.

-----

3) Why transform: translate() instead of left and top? 

This is a CSS performance concept called the "Compositor layer". When you change left/top, the browser must:

Recalculate layout (reflow) — expensive
Repaint pixels — expensive
Composite the result

When you change transform, the browser skips steps 1 and 2 entirely and goes straight to step 3. 
The element was already painted; the GPU just shifts the pixels. This is why transform-based animations feel instant even on slower devices. 

-----

4) Why snap to a grid?

Snapping to a grid can improve the user experience by providing a sense of structure and alignment. 
It can make it easier for users to position elements precisely and create a more organized layout. 
In design tools, snapping to a grid helps maintain consistency and can speed up the design process by reducing the need for manual adjustments.

-----

5) Why save position in localStorage?

Saving the position in localStorage allows the application to persist the state of the draggable element across page reloads. 
This means that if a user moves the element to a specific location and then refreshes the page, the element will remain in that position instead of resetting to its initial state. 
This enhances the user experience by providing continuity and allowing users to maintain their custom layout or configuration without losing it upon refreshing the page.
 * */