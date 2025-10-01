import React, {useState} from 'react';
import Carousel from './Carousel';
import './Content.css'

export default function Content({SubKeys, tabs, activeTab, setActiveTab}){
    const [index, setIndex] = useState(0);

    const CurrentSubKey = SubKeys[index];
    console.log(CurrentSubKey)

    function handleNextClick(){
                if(index < SubKeys.length-1){
            setIndex(index + 1);
        }
    }

        function handlePreviousClick(){
                if(index > 0){
            setIndex(index - 1);
        }
    }

    return(
        <div className='Container'>
            <div className="Heading">
            <h2>{activeTab}</h2>
            </div>

            <div className="details">
                <h3>{CurrentSubKey}</h3>
                <Carousel CurrentSubKey={CurrentSubKey}/>
            </div>

            <div className="buttons">
                <button className='butns' onClick={handlePreviousClick}>Previous</button>
                <button className='butns' onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
}