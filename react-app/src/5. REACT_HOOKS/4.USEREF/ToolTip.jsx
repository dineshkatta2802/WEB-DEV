import React, { useEffect, useRef, useState } from 'react';

function ToolTip({text, children}){
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({top : 0, left : 0});

    const showToolTip =() => {
        setIsVisible(true);
    }

    const hideToolTip =() => {
        setIsVisible(false);
    }

    const childrenRef = useRef(null);
    const textRef = useRef(null);

    const anchorStyle = {
        display: 'inline-block',
        position: 'relative'
    }

    const childrenStyle = {
        height : 'auto',
        width : 'auto',
        backgroundColor : 'violet',
        color : 'white',
        padding : '5px',
        display : 'inline-block',
        cursor : 'pointer',
    }

    const textStyle = {
        padding : '2px',
        backgroundColor : 'black',
        color : 'white',
        position: 'fixed',
        pointerEvents : 'none',
        top : position.top,
        left : position.left,
        // bottom : '100%',
        // left : '50%',
        // transform : 'translateX(-50%)',
        // marginBottom : '1rem'
    }

    
    useEffect(() => {
        if(!isVisible) return;

        const childrenBoundaries = childrenRef.current.getBoundingClientRect();
        const textBoundaries = textRef.current.getBoundingClientRect();

        const OFFSET = 10;

        const spaceAbove = childrenBoundaries.top;
        const spaceBelow = window.innerHeight - childrenBoundaries.bottom;

        const place = spaceAbove >= textBoundaries.height + OFFSET ? 'top' : 'bottom';

        // centering the ToolTip
        const left = childrenBoundaries.left +  childrenBoundaries.width/2 - textBoundaries.width/2 + window.scrollX;

        const top = (place === 'top') ? childrenBoundaries.top - textBoundaries.height - OFFSET + window.scrollY : childrenBoundaries.bottom + OFFSET + window.scrollY ;

        setPosition({top : top, left : left});

    }, [isVisible])

    return(
        <div style={anchorStyle}>
            <span 
            ref={childrenRef}
            style={childrenStyle}
            onMouseEnter={showToolTip}
            onMouseLeave={hideToolTip}
            onFocus={showToolTip}
            onBlur={hideToolTip}
            >{children}</span>

            {isVisible && 
                <div ref={textRef} style={textStyle}>{text}</div>
                }
        </div>
    );
}

export default function App(){
    const containerStyle = {
        width  :'100%', 
        height : '100vh', 
        display : 'flex', 
        justifyContent : 'center', 
        alignItems : 'center', 
        gap : '1rem'
    }

    return(
        <div style={containerStyle}>
                <ToolTip text={'This is a universal span'}><span>Span tag</span></ToolTip>
                <ToolTip text={'This is a universal button'}><button>Button</button></ToolTip>
                <ToolTip text={'This is a universal div'}><div>Div Tag</div></ToolTip>
        </div>
    );
}