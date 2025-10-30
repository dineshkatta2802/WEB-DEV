import React from 'react';

export default function Logout({username}){
    return(
        <form onSubmit={e => e.preventDeault()}>
            Logged in as : {username}
            <input type="submit" value='Logout'/>
        </form>
    );
}