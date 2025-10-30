import React from 'react';

export default function Register(){
    return(
        <form onSubmit={e => e.preventDeault()}>
            <label htmlFor='username'>Username : </label>
                <input  type='text' name='username' id='username'/>
            <br/>
            <label htmlFor='password'>Password : </label>
                <input  type='text' name='password' id='password'/>
            <br/>
            <label htmlFor='repeat-password'>Repeat Password : </label>
                <input  type='text' name='repeat-password' id='repeat-password'/>
            <br/>
            <input type="submit" value='Login'/>
        </form>
    );
}