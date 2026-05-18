import React, { useContext } from 'react';
import { UserContext } from './User';
import Panel from './Panel';
import Greetings from './Greetings';
import LoginForm from './LoginForm';

export default function WelcomePanel({children}){
    const {currentUser} = useContext(UserContext);
    return(
        <Panel title = 'Welcome'>
            {currentUser == null ? <LoginForm/> : <Greetings/>}
        </Panel>
    );
}