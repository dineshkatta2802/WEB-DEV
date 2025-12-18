import React, { useEffect, useState } from 'react';

export default function ScrollIndicator(){
    // const initalScroll = document.documentElement.scrollHeight;
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
            const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
            const totalScrollable = scrollHeight - clientHeight;
            const percent = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
        setProgress(percent);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const style = {
        backgroundColor: 'crimson',
        position :  'fixed',
        top : 0,
        left : 0,
        width : progress + '%',
        height : '10px',
        zIndex : 1000
    }

    return(
        <div style={{width : '100%', height : '10s00vh'}}>
            <div className="scroll" style={style}></div> 
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
        </div>
    );
}