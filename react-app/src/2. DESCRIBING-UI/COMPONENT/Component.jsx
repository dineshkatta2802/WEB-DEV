import React from 'react';

export function Profile(){
    return(
        <img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg' alt='Issac Newton' width={200} height={200}
                style={{
                    margin : '2px',
                    objectFit : 'cover'
                }}/>
    );
}

export default function Gallery(){
    return(
        <div>
            <Profile/>
            {/* <Profile/>
            <Profile/> */}
        </div>
    );
}