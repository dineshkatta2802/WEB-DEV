import React from 'react';

export default function Login({setUserName}){
    function handleSubmit(e){
        e.preventDefault();
        const username = e.target.elements.username.value;
        setUserName(username);
    }
    return(
        <div>
            <h1>Login here</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login-username">Username : </label>
                <input type="text" name='username' id='login-username' required/>
                <br />
                <label htmlFor="login-password">Password : </label>
                <input type="text" name='password' id='login-password' required/>
                <br />
                <input type="submit" value='Login'/>
            </form>
        </div>
    );
}