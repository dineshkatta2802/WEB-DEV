import React from 'react';

//Lets creat a AlertButton that get triggeres when the user clicks

function AlertButton({message, children}){ // Passing the props to the AlerButton
    //Lets create a handleClick event listner
    function handleClick(){
        alert(message);
    }
    return(
        // Lets create a normal button and pass the props
            <button onClick={handleClick}>
                {children}
            </button>
    );
}

export default function ReadingProps(){
    return(
        <div>
            <AlertButton message={'Uploading the content'}> 
                Upload
            </AlertButton>
            <AlertButton message={'Playing the content'}> 
                Play
            </AlertButton>
            <AlertButton message={'Downloading the content'}> 
                Download
            </AlertButton>
        </div>
    );
}