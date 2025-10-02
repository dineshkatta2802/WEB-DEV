import React from 'react';
import Form from './Form';

let Statuses = [
                'empty',
                'typing',
                'submitting',
                'success',
                'error'
            ]

export default function App(){
    return(
        <>
            {Statuses.map(status => (
                <section key={status}>
                    <h1>Form : ({status})</h1>
                    <Form status = {status}/>
                    <hr/>
                </section>
            ))}
        </>
    );
}