import React from 'react';
import Keyboard from './Keyboard'
import UserInput from './UserInput';

const MainCon = {
    width : '100%',
    height  : '90vh',
    display : 'flex',
    alignItems : 'center',
    justifyContent  : 'center',
    flexDirection : 'column'
}

export default function Main(){
    return(
        <div style={MainCon}>
            <UserInput/>
            <Keyboard/>
        </div>
    );
}