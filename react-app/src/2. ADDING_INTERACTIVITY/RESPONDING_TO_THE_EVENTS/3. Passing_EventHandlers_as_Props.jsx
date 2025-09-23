import React from 'react';

function Child({message}){//Getting the message a the prop from the Parent
    return(
        // Lets create a normal button
        <button onClick={message}>
            Click to see the message
        </button>
    );
}

export default function Parent(){
    ///Lets make a event handler
    function handleMessage(){
        alert('Hello');
    }
    return(
        //Passing the 'handleMessage' event  handler function as a prop to 'message'
            <Child message = {handleMessage}/>
    );
}

