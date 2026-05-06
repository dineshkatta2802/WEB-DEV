import React, { useContext } from 'react';
import { UserContext } from './User';

export default function Greetings(){
    const {currentUser} = useContext(UserContext);

    return(
        <p>
            You logged in as {currentUser}.  
        </p>
    ); 
}