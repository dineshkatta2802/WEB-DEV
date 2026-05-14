import React from 'react';

const source = 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg';
const alternarive = 'Issac Newton';

const styling = {
    backgroundColor : 'black',
    size : {
            width : '300px',
            heigth : '300px',
    },
    objectfit : 'cover',
}


export default function Curly(){
    return(
        <div style={{
                    backgroundColor : styling.backgroundColor,
                    width : '100%',
                    height : '100vh',
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center'
        }}>    
            <img src={source} alt={alternarive} style={{width : styling.size.width,
                                                        height : styling.size.heigth,
                                                        objectFit : styling.objectfit}}/>
        </div>
    );
}