import React, { useContext, useState } from 'react';
import { UserContext } from './User';
import Button from './Button';

export default function LoginForm(){
    const {setCurrent} = useContext(UserContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const canLogin = (firstName !== '') && (lastName !== '');
    return(
        <>
            <label>FirstName : 
                <input type="text" onChange={e => setFirstName(e.target.value)} required/>
            </label>
            <label>LastName : 
                <input type="text" onChange={e => setLastName(e.target.value)} required/>
            </label>

            <Button disabled = {!canLogin} onClick={() => {setCurrent({name : firstName+""+lastName})}}>
                Log in  
            </Button>
            {!canLogin && <p>Fill in both the details</p>}
        </>
    );
}