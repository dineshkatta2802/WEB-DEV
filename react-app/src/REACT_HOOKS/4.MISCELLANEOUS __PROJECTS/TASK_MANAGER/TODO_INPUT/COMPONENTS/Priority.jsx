import React from 'react';
import '../Todo.css'

export default function PriorityPopup({setShowPriorityPopup}){
    function closePriorityPopup(){
        setShowPriorityPopup(prev => !prev);
    }

    return(
        <div className='PriorityCon' onClick={closePriorityPopup}>
            <div className="followingPriority" onClick={(e) => e.stopPropagation()}>
                <button className="today"><span className="name">High<i className="fa-solid fa-flag"></i></span></button>
                <button className="today"><span className="name">Medium<i className="fa-solid fa-flag"></i></span></button>
                <button className="today"><span className="name">Low<i className="fa-solid fa-flag"></i></span></button>
            </div>
        </div>
    );
}