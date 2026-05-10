import React, { useEffect, useRef, useState } from 'react';

export default function Main(){
    const [inputText, setInputText] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const timerRef = useRef(null);

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    useEffect(() => {
        // Edge Case
        if(inputText.trim() === '') {
            setData([]);
            setError(null);
            setLoading(false);
            return;
        };

        // Canceling the old interval
        clearTimeout(timerRef.current);

        // Starting a new timer for 1.5 sec
        timerRef.current = setTimeout(async() => {
            // Fetching the data
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://api.github.com/search/repositories?q=${inputText}`)
                if(!response.ok){
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                setData(data.items || []);
            } 
            catch (error) {
                setError(error.message);
            }
            finally{
                setLoading(false);
            }

            // Calling the function
        }, 2000);

        return () =>  {clearTimeout(timerRef.current)};
    }, [inputText])

    const handleReset = () => {
        setInputText('');
        setData([]);
        setError(null);
        setLoading(false);
    }

    return(
        <div>
            <input type="text" value={inputText} onChange={handleChange}/>
            <button onClick={handleReset}>Reset</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error : {error}</p>}

            {!loading && !error && data.length > 0 && (
                <div>
                    {data.map((repo) => (
                        <div key={repo.id}>
                            <h2>{repo.name}</h2>
                            <p>{repo.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}