import React, { useState } from 'react';
import Login from './INDIVIDUAL/Login.jsx';
import Register from './INDIVIDUAL/Register.jsx';
import Logout from './INDIVIDUAL/Logout.jsx';

export default function UserBar({username, setUserName}){
    // const username ='Dinesh Katta';
    // const [username, setUserName] = useState(''); // ------->This line is lifted to the Main.jsx

    const [logout, setLogout] = useState(false);

    if(username){
        return <Logout username={username} setUserName={setUserName} setLogout={setLogout}/>
    }
    return(
        <>
            <Login setUserName={setUserName}/>
            <hr />
            <Register setUserName={setUserName}/>
        </>
    );
}