import React, { Children } from 'react';

function AlertButton({message, children}){
    return(
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function App(){
    return(
        <div>
            <AlertButton message='Playing'> Play </AlertButton>
            <AlertButton message='Uploading'> Uploading Image </AlertButton>
        </div>
    );
}