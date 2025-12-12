import React, { useEffect, useState } from 'react';

export default function ScrollIndicator(){
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
            const totalScrollable = scrollHeight - clientHeight;
            const percent = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;

            setProgress(percent);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const filler = Array(100).fill("This is a scroll indicator page using useEffect!!!");

    const barStyle ={
        height : '6px',
        width : progress + '%',
        background : 'linear-gradient(90deg, #77E4C8,#36C2CE,#478CCF,#4535C1)',
        position : 'fixed',
        top :0,
        left : 0,
        transition : 'width .5s linear',
        zIndex : 1000
    }

    return(
        <>
            <div style={barStyle}></div>
            <div className="scrollable" style={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
                {filler.map((line, i) => (<p  key={i}>{line}</p>))}
            </div>
        </>
    );
}