import React, {useEffect, useRef, useState } from 'react';
import {DragContext} from './Context/Drag'

const initialItem = [
    {
        id : 0,
        type : 'Paper',
        x : 0,
        y : 0,
    },
    {
        id : 1,
        type : 'Plastic',
        x : 120,
        y : 80,
    }
]

export default function MyDrag({children}) {
    const gridSize = 20;
    const [item, setItem] = useState(() => {const saved = localStorage.getItem('ElePosition'); return saved ?JSON.parse(positionRef) : initialItem; });
    const activeDragItemIdRef = useRef(null);
    const activeEleRef = useRef(null);
    const grabOffsetActiveItem = useRef({x : null, y : null});
    const positionRef = useRef({x : null, y : null});
    const rafRef = useRef(null);

    const update =() => {
        if(!activeEleRef.current || !activeEleRef.current) return;
        activeEleRef.current.style.transform =`translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        // Updates the activeEleRef every frame
        rafRef.current = requestAnimationFrame(update);
    }

    const handleMouseDown = (id,ele, e) => {
        activeDragItemIdRef.current = id;
        activeEleRef.current = ele;

        if(activeEleRef.current){
            const eleMetrics = ele.getBoundingClientRect();

            grabOffsetActiveItem.current = {
                x : e.clientX - eleMetrics.left,
                y : e.clientY - eleMetrics.top
            }
        }

        rafRef.current = requestAnimationFrame(update);
    }

    const handleMouseMove = (e) => {
        if (!activeEleRef.current || !activeEleRef.current.parentElement) return;

        const parentEleMetrics = activeEleRef.current.parentElement.getBoundingClientRect();

        const newX = e.clientX -parentEleMetrics.left - grabOffsetActiveItem.current.x;
        const newY = e.clientY -parentEleMetrics.top - grabOffsetActiveItem.current.y;

        // Boundary Restrictions
        const minX = 0;
        const maxX = parentEleMetrics.width - activeEleRef.current.offsetWidth;
        const clampedX = Math.max(minX, Math.min(newX, maxX));

        const minY = 0;
        const maxY = parentEleMetrics.height - activeEleRef.current.offsetHeight;
        const clampedY = Math.max(minY, Math.min(newY, maxY));

        positionRef.current = {x : clampedX, y : clampedY}
    }

    const handleMouseUp = () => {
        if (activeEleRef.current === null) return;
        const snappedX = Math.round(positionRef.current.x / gridSize) * gridSize;
        const snappedY = Math.round(positionRef.current.y/ gridSize) * gridSize;
        activeEleRef.current.style.transform =`translate(${snappedX}px, ${snappedY}px)`;

        positionRef.current = {x : snappedX, y : snappedY};

        // Saved Position
        localStorage.setItem('ElePosition', JSON.stringify(positionRef.current));
        cancelAnimationFrame(rafRef.current);
        activeDragItemIdRef.current = null;
        activeEleRef.current = null;
    }

    const value = {
        item, 
        setItem,
        activeDragItemIdRef,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp
    }

    return (
        <DragContext.Provider value={value}>
            {children}
        </DragContext.Provider>
    );
}