// ------------------------------------------------------------------------------------------------------------------------------------
//RUNNIG THE SIDE EFFECT AFTER EVERY RENDER
// Example 3 : DOCUMENT TITLE
// ------------------------------------------------------------------------------------------------------------------------------------

// Reaching out to the browser title outside of react is said to be a side effect becoz the browse API 
// document is outside the React

// import React, { useEffect, useState } from 'react';

// export default function App(){
//     const greetings = ['Hello', 'こんにちは', '你好', 'Bonjour', 'مرحبًا', '안녕하세요'];

//     const [index , setIndex] = useState(0);

//     function randomIndex(){
//         setIndex(Math.floor(Math.random() * greetings.length));
//     }

//     useEffect(() =>{
//         document.title = greetings[index];
//     })

//     return(
//         <div>
//             <button onClick={randomIndex}>Say Hi</button>
//         </div>
//     );
// }

// ------------------------------------------------------------------------------------------------------------------------------------
//RUNNING A EFFECT ONLY WHEN A COMPONENT MOUNTS
// Example 2 : WINDOW WIDTH
// ------------------------------------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';

// export default function App(){
//     const [windowWidth, setwindowWidth] = useState(window.innerWidth);

//     function handleResize(){
//         setwindowWidth(window.innerWidth);
//     }

//     useEffect(() => {
//         window.addEventListener('resize', handleResize);
//     },[])

//     return(
//         <div>
//             WIDTH : {windowWidth}
//         </div>
//     );
// }

// ------------------------------------------------------------------------------------------------------------------------------------
//RUNNING A EFFECT ONLY WHEN A COMPONENT MOUNTS
// Example 2 : WINDOW WIDTH
// ------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// export default function UserStorage () {
//     const [user, setUser] = useState("Sanjiv");
//     useEffect(() => {
//         const storedUser = window.localStorage.getItem("user");
//                 if (storedUser) {
//                     setUser(storedUser);
//                 }
//                     }, []);
//     useEffect(() => {
//         window.localStorage.setItem("user", user);
//     }, [user]);
//     return (
//         <select value={user} onChange={e => setUser(e.target.value)}>
//                 <option>Jason</option>
//                 <option>Akiko</option>
//                 <option>Clarisse</option>
//                 <option>Sanjiv</option>
//             </select>
// );
// }


// ------------------------------------------------------------------------------------------------------------------------------------
// Example 5 : STOP WATCH
// ------------------------------------------------------------------------------------------------------------------------------------

// import React, { useReducer, useEffect, useRef } from 'react';

// function reducer(state, action){
//     switch (action.type) {
//         case 'start':
//             return {...state, isRunning : true}
//         case 'stop':
//             return {...state, isRunning : false}
//         case 'reset':
//             return {isRunning : false, time : 0}
//         case 'tick':
//             return {...state, time : state.time + 1}
    
//         default:
//             throw new Error("Unknown type is not accepted")
//     }
// }

// export default function Example2(){
//     const initialState = {
//         isRunning : false,
//         time : 0
//     }

//     const  [state, dispatch] = useReducer(reducer, initialState);
//     const idRef = useRef(0);    

    
//     useEffect(() => {
//     if (!state.isRunning) { 
//       return; 
//     }
//     idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
//     return () => {
//       clearInterval(idRef.current);
//       idRef.current = 0;
//     };
//   }, [state.isRunning]);


//     function start(){
//         dispatch({type : 'start'})
//     }

//     function stop(){
//         dispatch({type : 'stop'})
//     }

//     function reset(){
//         dispatch({type : 'reset'})
//     }

//     function tick(){
//         dispatch({type : 'tick'})
//     }


//     return(
//         <div>
//             {state.time}s
//             <button onClick={start}>START</button>
//             <button onClick={stop}>STOP</button>
//             <button onClick={reset}>RESET</button>
//             <button onClick={tick}>TICK</button>
//         </div>
//     );
// }