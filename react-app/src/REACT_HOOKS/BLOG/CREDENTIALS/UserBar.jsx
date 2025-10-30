import React from 'react';
import Logout from './Logout.jsx';
import Login from './Login.jsx';
import Register from './Register';

export default function UserBar(){
    const username ='';
    if(username){
        return <Logout username={username}/>
    }
    return(
        <>
        <Login/>
        <hr />
        <Register/>
        </>
    );
}