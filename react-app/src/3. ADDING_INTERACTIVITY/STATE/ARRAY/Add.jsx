    import React, { useState } from 'react';

        let nextId = 0;

    export default function App(){
        const [name, setName] = useState('');
        const [artists, setArtist] =  useState([]);

        return(
            <div>
                <h1>Un-Ordered list of names entered in the input box</h1>
                <label htmlFor="">Enter the name :  
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>

                <button 
                        onClick={() => setArtist([
                            ...artists, 
                            {id : nextId++, name : name},
                                                ])}

                        // onClick={artists.push({id : nextId++ , name : name})} // This actuallly causes mutation
                        >
                    Add</button>
                <button onClick={() => setArtist([])}>Clear</button>

                <ul>{artists.map(artist => <li key={artist.id}>{artist.name}</li>)}</ul>
            </div>
        );
    }