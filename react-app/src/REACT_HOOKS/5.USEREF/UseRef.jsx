import React, { useRef, useState } from 'react';
export default function UseRef(){
    const [state, setState] = useState(0);
    const ref = useRef(0);
    
    const handleStateChange = () =>{
        setState(state + 1);
        alert(`Count is increased to ${state + 1}`);
    }

    const handleRefChange = () => {
        ref.current = ref.current + 1;
        alert(`Count is increased to ${ref.current}`);
    }

    return(
        <div>
            <div>
                <button onClick = {handleStateChange}>Increase state count</button>
                <h1>{state}</h1>
            </div>
            <div>
                <button onClick = {handleRefChange}>Increase Ref count</button>
                <h1>{ref.current}</h1>
            </div>
        </div>
    );
}