import React, { useRef } from 'react';

export default function Focus(){
    const inputEleRef = useRef(null);

    function handleClick() {
        inputEleRef.current.focus();
    }

    return(
        <div>
            <input type="text" ref={inputEleRef}/>
            <button onClick={handleClick}>Focus</button>
        </div>
    );
}