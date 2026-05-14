import React, { useState } from 'react';
import {Genre} from './Genre';
import './Style.css';

function Card(){
    const [index, setIndex] = useState(0);

    function handleNextClick(){
        if(index < Keys.length-1){
            setIndex(index + 1);
            triggerAnimation();
        }
    }
    
    function handlePreviousClick(){
        if(index > 0){
            setIndex(index - 1);
            triggerAnimation();
        }
    }

    const [showMore, setShowMore] = useState(false);

    function handleShowMoreClick(){
        setShowMore(!showMore);
    }


    //Lets get an array of the MainKeys that you want to display by .map() method in array
    const Keys = Genre.map((data) => Object.keys(data).find((res) => res !== 'id'));
    // console.log(Keys);//This is a Mainkeys array
    let MainKey = Keys[index];

    // Lets get the subkeys of the Genre 
    const SubKeys = Object.keys(Genre[index][MainKey]);
    console.log(SubKeys);

    // const InnerSubCategory = Object.values(Genre[index][MainKey]);
    // console.log(InnerSubCategory);


    const listItems = SubKeys.map((category,i) => <li style={{listStyle : 'none', fontWeight : 'bold', fontSize : '20px', margin : '5px',display : 'flex',justifyContent : 'center',alignItems : 'center',flexDirection : 'row'}}>
                            {category}
                        </li>)

    const [animate, setAnimate] = useState(false);

    function triggerAnimation(){
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000);
    }

    return(
        <div className={`con ${animate ? 'roll' : ""}`} style={{justifyContent : showMore? 'space-between' : 'center'}}>
            <div className="Head">
                <h1>{MainKey}</h1>
            </div>

            {showMore && <ul style={{display : 'flex',justifyContent : 'center',alignItems : 'center',flexDirection : 'column'}}>{listItems}</ul>}

            <div className="btns">
                <button className='showMore' onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'Show'}</button>
                <div className="nav">
                    <button onClick={handleNextClick}>Next</button>
                    <button onClick={handlePreviousClick}>Previous</button>
                </div>
            </div>
        </div>
    );
}

export default function App(){
    return(
        <div className='Main'>
            <Card/>
        </div>
    );
}