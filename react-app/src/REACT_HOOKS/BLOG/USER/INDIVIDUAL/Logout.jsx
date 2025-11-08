import React from 'react';

export default function Logout({username, setUserName  ,setLogout}){
    function handleSubmit(e){
        e.preventDefault();
        setLogout(false);
        setUserName({username})
    }
    return(
        <div>
            <form onSubmi={handleSubmit}>
                Logged in as : {username}
                <input type="submit" value='Logout'/>
            </form>
        </div>
    );
}