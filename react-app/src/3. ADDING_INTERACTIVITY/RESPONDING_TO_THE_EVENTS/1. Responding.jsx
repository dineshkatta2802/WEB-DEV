import React from 'react';

// function handleClick(){
//     return console.log("Clicked") ;
// }

export default function App(){
    return(
        // <button onClick={handleClick}>
        //     click Here
        // </button>

        // Alternate ways to pass a event
        <button onClick={function handleClick(){console.log('Clicked')}}>
            click Here
        </button>

        // // Another way to declare an event is a s follows
        // <button onClick={() => {console.log('Clicked')}}>
        //     click Here
        // </button>
    );
}