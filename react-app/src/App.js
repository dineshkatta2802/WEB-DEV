import { useState } from "react";

//BEFORE STEP-4 :: function Square({value}) {
//BEFORE STEP-5 :: function Square() {
//AFTER STEP-5 ::
function Square({ value }) {
  /*-------------------------------------STEP-4----------------------------- */
  //Now you want the sqaure component to remember that it got clicked so we use
  //"import {useState} from react " to remember the use state 
  //et’s store the current value of the Square in state, 
  // and change it when the Square is clicked.
  //SO, Remove the 'value' prop from the Square
    // const [value, setValue] = useState(null);

  /*-------------------------------------STEP-3----------------------------- */
  //Making an interactice component:
  // This is a local function inside the component. 
  // It will be called whenever the square (button) is clicked.
  // Right now, it just logs "clicked!" to the browser console.
  //--- BEFORE STEP-4::
  // function handleClick() {
  //     console.log('clicked');
  // }

  //--- AFTER STEP-4::
  // change Square to display an “X” when clicked
//   function handleClick() {
//     setValue('X');
//   }

/*-------------------------------------STEP-2----------------------------- */
  // return <button className="sqaure">1</button>;

  //But the numbered squares you had before are all changed to 1
  //to get the numbers back lets use props
//   return <button className="square" onClick={handleClick}>{value}</button>;

/*-------------------------------------STEP-6----------------------------- */
  return <button className="square">{value}</button>;
}

export default function Board() {
  /*-------------------------------------STEP-5----------------------------- */
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    /*-------------------------------------STEP-1---------------------------- */
    //--- BEFORE STEP-1::        
    // <div className='board-row'>
    //     <button className = 'square'>1</button>
    //     <button className = 'square'>2</button>
    //     <button className = 'square'>3</button>
    // </div>
    // <div className='board-row'>
    //     <button className = 'square'>4</button>
    //     <button className = 'square'>5</button>
    //     <button className = 'square'>6</button>
    // </div>
    // <div className='board-row'>
    //     <button className = 'square'>7</button>
    //     <button className = 'square'>8</button>
    //     <button className = 'square'>9</button>
    // </div>

    //Here as we can see we created a button 9 times
    //the same code 9 times, that would be messy and hard to maintain
    //Instead of repeating the same logic 9 times, React lets you make one component

    //--- BEFORE STEP-4::        
    // <div className="board-row">
    //     <Square value="1"/>
    //     <Square value="2"/>
    //     <Square value="3"/>
    // </div>
    // <div className="board-row">
    //     <Square value="4"/>
    //     <Square value="5"/>
    //     <Square value="6"/>
    // </div>
    // <div className="board-row">
    //     <Square value="7"/>
    //     <Square value="8"/>
    //     <Square value="9"/>
    // </div>
    //Here each button is individually clickable and updatable

    //--- BEFORE STEP-5:: 
    //Since the Square component no longer accepts props anymore, 
    // you’ll remove the value prop from all nine of the Square 
    // components created by the Board component:
    // <div className="board-row">
    //     <Square/>
    //     <Square/>
    //     <Square/>
    // </div>
    // <div className="board-row">
    //     <Square/>
    //     <Square/>
    //     <Square/>
    // </div>
    // <div className="board-row">
    //     <Square/>
    //     <Square/>
    //     <Square/>
    // </div>

    /*-------------------------------------STEP-5----------------------------- */
    //AFTER STEP-5::
    //Now your Board component needs to pass the value prop down to each Square

    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
