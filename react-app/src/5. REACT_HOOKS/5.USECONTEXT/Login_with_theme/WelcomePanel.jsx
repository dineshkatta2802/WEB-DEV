import React, { useContext } from 'react';
import { UserContext } from './User';
import Panel from './Panel';
import Greetings from './Greetings';
import LoginForm from './loginForm';

export default function WelcomePanel({children}){
    const {currentUser} = useContext(UserContext);
    return(
        <Panel title = 'Welcome'>
            {currentUser == null ? <LoginForm/> : <Greetings/>}
        </Panel>
    );
}