import React, { useState } from 'react';

export default function Register({setUserName}){
    const [invalidRepeatPassword, setInvalidRepeatPassword] = useState(false);

        function handleSubmit(e){
        e.preventDefault();
        if(e.target.elements.password.value !== e.target.elements.repeat_password.value){
            setInvalidRepeatPassword(true);
            return;
        }
        setInvalidRepeatPassword(false);
        const username = e.target.elements.username.value;
        setUserName(username);
    }
    return(
        <div>
            <h1>Register here</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="register-username">Username : </label>
                <input type="text" name='username' id='register-username' required/>
                <br />
                <label htmlFor="register-password">Password : </label>
                <input type="text" name='password' id='register-password' required/>
                <br />
                <label htmlFor="register-repeat-password">Repeat Password : </label>
                <input type="text" name='repeat_password' id='register-repeat-password' required/>
                <br />
                {invalidRepeatPassword && <div style={{color :'red'}}> Passwords must match!!!</div>}
                <input type="submit" value='Register'/>
            </form>
        </div>
    );
} 