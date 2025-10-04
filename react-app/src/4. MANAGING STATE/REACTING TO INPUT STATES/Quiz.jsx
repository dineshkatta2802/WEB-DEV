import React, { useState } from 'react';

export default function Form(){
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if(status === 'success'){
        return <h1 style={{color: 'green'}}>Right Answer!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        try {
            await submitForm(answer);
            setStatus('success');
        } catch (error) {
            setStatus('typing');
            setError(error)
        }
    }

function submitForm(ans){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let solution = ans.toLowerCase() === 'lima'
            if(solution){
                resolve();
            }
            else{
                reject('Give a good try');
            }
                }, 1500);
    })
}

    return(
        <>
            <h2>City Quiz</h2>
            <p>In what city a billboard will convert air into water ?</p>

            <form onSubmit={handleSubmit}>
                <textarea   value={answer} 
                            onChange={e => setAnswer(e.target.value)}
                            disabled ={status === 'submitting'}/>

                <br />
                
                <button disabled= {status === 'submitting'|| answer.length === 0}>Submit</button>

                {error !== null && <p style={{color : 'red'}}>{error}</p>}
            </form>
        </>
    );
}

