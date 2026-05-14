import React, { useState } from 'react';
import {Scientist_Data} from './Scientist_Data'

export default function App(){
    // let index = 0;
    const [index,setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        // index += 1;
        setIndex(index+1)
    }

    function handleShowMoreClick(){
        setShowMore(!showMore);
    }

    let scientist = Scientist_Data[index];
    return(
        <div>
            <h2>{scientist.name} - {scientist.Profession}</h2>
            <p>( {index+1} of {Scientist_Data.length})</p>
            <img src={`https://upload.wikimedia.org/wikipedia/commons/${scientist.imageId}`} alt={scientist.name} 
            style={{borderRadius : "50%",width: 200, height : 200, objectFit : "cover"}}/>
            <br />
            <button onClick={handleShowMoreClick}>
            {showMore ? 'Hide' : 'Show'}
            </button>
            <br />
            {showMore && <p>{scientist.accomplishments}</p>}
            <button onClick={handleNextClick}>
                Next
            </button>
        </div>
    );
}