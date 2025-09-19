import React from 'react';
//Lets create a Custom Button 
function CustomButton({onClick,  children}){
    return <button onClick={onClick}> {children} </button>
}

//Lets create a PlayButton Component
function PlayButton({movieName}){
    function handlePlay(){
        alert(`Playing ${movieName} movie in the theater`)
    }
    return <CustomButton onClick={handlePlay}> Play {movieName}</CustomButton>
}

function Uploading(){
    return <CustomButton onClick={() => alert('Uploading the image')}> Uplaod Image </CustomButton>
}

export default function App(){
    return(
        <div>
            <PlayButton movieName='Bahubali'/>
            <Uploading/>
        </div>
    );
}