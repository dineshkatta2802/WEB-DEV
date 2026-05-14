import React from 'react';
import Panel from './Panel';
import Button from './Button';

export default function Form(){
    return(
        <Panel title='Welcome to useContext'>
            <Button>SignUp</Button>
            <Button>Login</Button>
        </Panel>
    );
}