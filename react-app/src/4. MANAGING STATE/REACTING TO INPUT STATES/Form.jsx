import React from 'react';

export default function Form({status = 'empty'}){
        if(status === 'success'){
            return <h1>Right Answer</h1>
        }

    return(
        <>
            <h2>Enter the city name you are currenlty living in : </h2>
            <form action="">
                <textarea disabled={status === 'submitting'}></textarea>
                <br />
                <button disabled={status === 'submitting' || status === 'empty'}>submit</button>
                {status === 'error' && <p>Good guess but wrong answer</p>}
            </form>
        </>
    );
}