// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';

//Componets made by me
// import Main from './PROJECTS/CHARACTER_PROFILE(ANIME)/Main'
// import Event from './ADDING_INTERACTIVITY/RESPONDING_TO_THE_EVENTS/Responding'
// import Event from './ADDING_INTERACTIVITY/RESPONDING_TO_THE_EVENTS/Reading_Props'
import Event from './ADDING_INTERACTIVITY/RESPONDING_TO_THE_EVENTS/Passing_EventHandlers_as_Props'
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main/> */}
    <Event/>
  </React.StrictMode>
);
