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
                        onClick={() => {
                                            if(name.trim() == ''){
                                                alert("Enter name")
                                            }
                                            else{
                                                setArtist([
                                                ...artists, 
                                                {id : nextId++, name : name}
                                                ])
                                            }
                        }}

                        // onClick={artists.push({id : nextId++ , name : name})} // This actuallly causes 
                        >
                    Add</button>
                <button onClick={() => setArtist([])}>Clear</button>

            <ul>{artists.map(artist => (
                                            <li key={artist.id}>
                                            {artist.name}
                                            {' '}
                                            <button onClick={() => setArtist(artists.filter(a => a.id !== artist.id))}>Delete</button>
                                            </li>
                                        )
                            )
                }
            </ul>
            </div>
        );
    }