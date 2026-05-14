import React, { useState } from 'react';

export default function App(){
    const [number,setNumber] = useState(0);
    return(
        <div>
            <h1>{'Batching by Updater Function'}</h1>
            <h2>{number}</h2>
            <button onClick={() => {
                                    setNumber(n => n + 1)
                                    setNumber(n => n + 1)
                                    setNumber(n => n + 1)
                                    }
                            }> +3 </button>
        </div>
    );
}