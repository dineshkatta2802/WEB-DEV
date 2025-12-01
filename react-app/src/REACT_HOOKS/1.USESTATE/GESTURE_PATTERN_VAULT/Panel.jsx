import React, { useState } from 'react';

export default function Panel(){
    //current grid size
    const GRID_SIZE = 3;

    //Saved Pattern
    const [savedPattern, setSavedPattern] =  useState([]);

    // Current pattern drawn
    const [currentPattern, setCurrentPattern] = useState([]);

    // Message to be dispalyed
    const [message, setMessage] = useState('');

    // Toggle mode
    const [isRecording, setIsRecording] = useState(false);
    const [isVerifying , setIsVerifying] =  useState(false);

    // Turak wether the user is holding the mouse or not
    const [isMouseDown, setIsMouseDown] = useState(false);

//---------------------------------------------------------------------------------------------------------------------
    // This function runs the moment the user presses the
    // mouse down button to start drawing the pattern
    // ex) Lifting your finger before drawing a new unlock pattern on a touchscreen lock grid.
    //onMouseDown = {handleStartPattern}
    const handleStartPattern = () => {
        setCurrentPattern([]);// Resetting the currentPattern to empty bcoz new currentPattern is gng to be recorded
        setMessage('');// Removes any success/failure message shown from the previous attempt.
        setIsMouseDown(true);// Turn ON pattern tracking(Press + hold), imp bocz swiping across cells is only allowed when the mouse is pressed down.
    }

    // onMouseUp = {handleEndPattern}
    const handleEndPattern = () => {
        setIsMouseDown(false);//Turn OFF pattern tracking, the mouse button is released

        // If we are recording save it 
        if(isRecording){
            setSavedPattern(currentPattern);
            setMessage('Pattern recorded!!!')
            setIsRecording(false); 
        }

        if(isVerifying){
            if(JSON.stringify(currentPattern) === JSON.stringify(savedPattern)){
                setMessage("Pattern Matched!!!");
            }
            else{
                setMessage('Incorrect Pattern!!!')
            }
        }
    }

    const CellClick = (index) => {
        addCellToPattern(index);
    }

    const CellSwipe = (index) => {
        if(isMouseDown) addCellToPattern(index);
    }

    const addCellToPattern = (index) => {
        setCurrentPattern((prev) => {
            if(!prev.includes(index)){
                return [...prev, index]
            }
            return prev;
        })
    }

    const startRecording = () => {
        setSavedPattern([]);
        setCurrentPattern([]);
        setMessage('Draw your pattern');
        setIsRecording(true);
        setIsVerifying(false);
    }

    const startVerifying = () => {
        setCurrentPattern([]);
        setMessage('Verifying your pattern');
        setIsRecording(false)
        setIsVerifying(true);
    }

    return(
            <div className="panel">
                <div className="grid" onMouseDown={handleStartPattern} onMouseLeave={handleEndPattern} onMouseUp={handleEndPattern}>
                    {Array.from({length : GRID_SIZE * GRID_SIZE}).map((_,index) => {
                                                                                    const active = currentPattern.includes(index);
                                                                                    return(
                                                                                        <div key={index} onMouseEnter={() => CellSwipe(index)} onClick={() => CellClick(index)} className={`cell ${active? 'active' : ''}`}>
                                                                                            {index}
                                                                                        </div>
                                                                                    )
                    })}
                </div>

                <div className="controls">
                    <button onClick={startRecording}>Record Pattern</button>
                    <button onClick={startVerifying} disabled={savedPattern.length === 0}>Verify Pattern</button>
                </div>

                <div className="mssg">{message}</div>

                <div className="info">
                    <p><strong>Saved Pattern :</strong>{JSON.stringify(savedPattern)} </p>
                    <p><strong>Current Drawn Pattern :</strong> {JSON.stringify(currentPattern)}</p>
                </div>
            </div>
    );
}