import React from 'react';

function handleClick(){
    return alert("Clicked") ;
}

export default function App(){
    return(
        // <button onClick={handleClick}>
        //     click Here
        // </button>

        // Alternate ways to pass a event
        <button onClick={function handleClick(){alert('Clicked')}}>
            click Here
        </button>

        // // Another way to declare an event is a s follows
        // <button onClick={() => {alert('Clicked')}}>
        //     click Here
        // </button>
    );
}