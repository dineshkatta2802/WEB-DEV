import React, { useState } from 'react';

export default function App(){
    const [name, setName] = useState('Dinesh');

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