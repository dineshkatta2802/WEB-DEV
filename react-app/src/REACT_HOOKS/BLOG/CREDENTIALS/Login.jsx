import React from 'react';

export default function Login(){
    return(
        <form onSubmit={e => e.preventDeault()}>
            <label htmlFor='username'>Username : </label>
                <input  type='text' name='username' id='username'/>
            <br/>
            <label htmlFor='password'>Password : </label>
                <input  type='text' name='password' id='password'/>
            <br/>
            <input type="submit" value='Login'/>
        </form>
    );
}