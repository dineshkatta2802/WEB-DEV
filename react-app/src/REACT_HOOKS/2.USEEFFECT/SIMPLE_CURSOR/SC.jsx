import React, { useEffect, useState } from 'react';
import './SC.css'

export default function SimpleCursor(){
    // const [coords, setCoords] =  useState({X : 0, Y : 0});

    useEffect(() => {
        const follower = document.querySelector('.CursorFollower');
        const handleMove = (e) => {
            follower.style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25}px)`;
            // setCoords({X : e.clientX, Y : e.clientY});
        }

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    const followerStyle = {
        width : '50px',
        height : '50px',
        borderRadius : '50%',
        backgroundColor : 'crimson',
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : '100',
        cursor : 'pointer',
        pointerEvents : 'none',
        transition : 'transform .2s linear',
        overflow : 'hidden'
        // transform : `translate(${coords.X - 50}px, ${coords.Y - 50}px)`,
    }

    // const follower = document.createElement('div');
    // document.body.append(follower);
    // Object.assign(follower.style, followerStyle);

    return(
        // <div >
        <div className='CursorFollower' style={followerStyle}>
            {/* <div className='CursorFollower' style={followerStyle}></div> */}

            {/* <div className="follower" style={{followerStyle}}></div> */}
            {/* <h1>mouse coordinates</h1>
            <h3>{}</h3>
            <h3>{}</h3> */}
        </div>
    );
}