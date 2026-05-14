import React from 'react';

export default function Logout({username, setUserName}){
    function handleSubmit(e){
        e.preventDefault();
        setUserName('');
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                Logged in as : {username}
                <input type="submit" value='Logout'/>
            </form>
        </div>
    );
}