import React from 'react';
import getImage from './imageData';

function Avatar({person, size}){
    return (<div style={{display : "flex", flexDirection : "column", textAlign : "center", gap : 10}}>
            <img src={getImage(person)} alt={person.name} width={size} height={size} style={{objectFit : "cover", borderRadius : "50%"}}/>
            <h1>{person.name}</h1>
            </div>);
}

export default function App(){
    return(
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px'}}>
            <Avatar size={250} person = {{name : "Srinivas Ramanujan",imageId : "d/d0/Srinivasa_Ramanujan-Add._MS_a94_version2_%28cropped%29.jpg"}}/>
            <Avatar size={250} person = {{name : "Alber Einstein",imageId : "1/14/Albert_Einstein_1947.jpg"}}/>
            <Avatar size={250} person = {{name : "Issac Newton",imageId : "f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg"}}/>
            <Avatar size={250} person = {{name : "Arya Bhatta",imageId : "3/31/Aryabhata.jpeg"}}/>
        </div>
    );
}