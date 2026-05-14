import React, { useEffect, useState } from 'react';
import { createConnection } from './Chat';

// Lets create a component
function ChatRoom({roomId}){
    const [url, setUrl] = useState(`https://1234`);

    useEffect(() => {
        const connection = createConnection(url, roomId);
        connection.connect();

        return () => {
            connection.disconnect();
        }
    }, [url, roomId]);

    return(
        <>
        <label>
            Server URL : {" "}
            <input value={url} onChange={e => setUrl(e.target.value)}/>
        </label>
        <h1>Welcome to the {roomId}</h1>
        </>
    )
}

export default function Chat(){
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);

    return(
        <div>
            <label htmlFor="">
                Choose Chat Room : {' '}
                <select name={roomId} onChange={e => setRoomId(e.target.value)}>
                    <option value="general">General</option>
                    <option value="Music">Music</option>
                    <option value="Travel">Travel</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'}</button>
            {show && <hr/>}
            {show && <ChatRoom roomId={roomId}/>}
        </div>
    );
}