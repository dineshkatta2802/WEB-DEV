import React, { useState } from 'react';

const sayHi = () => {
    return  "Hello hi";
}

export default function App(){
    const [name, setName] = useState('Dinesh');

    // Youc can pass a function as the initial state , but it shall has no arguments and has to be pure 
    const [geertings, setGreetings] = useState(() => sayHi()); 

    function handleChange(e){
        setName(e.target.value);
    }

    return(
        <div>
            <h1>My name : {name}</h1>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    );
}