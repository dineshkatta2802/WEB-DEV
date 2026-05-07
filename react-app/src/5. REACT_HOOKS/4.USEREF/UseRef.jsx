import React, { useRef, useState } from 'react';
export default function UseRef(){
    const [state, setState] = useState(0);
    const ref = useRef(0);
    
    const handleIncrement = () =>{
        setState(state + 1);
        ref.current = ref.current++;
        console.log(`Count is increased to ${state + 1}`);
        console.log(`Count is increased to ${ref.current}`);
    }

    return(
        <div>
            <div>
                <button onClick = {handleIncrement}>Increase state count</button>
                <h1>{state}</h1>
            </div>
            <div>
                <button onClick = {handleIncrement}>Increase Ref count</button>
                <h1>{ref.current}</h1>
            </div>
        </div>
    );
}