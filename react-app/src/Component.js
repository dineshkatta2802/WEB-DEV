import React from 'react';

function MyButton() {
    return(
        <button>Click Here!</button>
    );
}

export default function App() {
    return (
        <div>
            <h1>My First Component in React</h1>
            <MyButton/>
        </div>
    );
}