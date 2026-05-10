import React, { useMemo, useState } from 'react';

export default function Main(){
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    const slowFunction = (n) => {
        alert('Running the slow function...');
        for(let i=0; i < 100000000; i++){} // empty for loop to cause lag
        return n*2;
    }

    // const doubled = slowFunction(count); // You are gonna double the value even when dark due to state re-rendering

    const doubled = useMemo(() => {
        return slowFunction(count);
    }, [count]) // You are gonna double only when the count changes


    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <h2>{doubled}</h2>
            <button onClick={() => setDark(!dark)}>Toggle-Theme</button>
            <h2>{dark ? 'True' : 'False'}</h2>
        </div>
    );
}