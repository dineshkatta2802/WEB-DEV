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
// import Conditional from './DESCRIBING-UI/CONDITIONAL/Conditional'
// import Project from './PROJECTS/DESCRIBING UI/Main'
// import Project from './PROJECTS/DESCRIBING UI/Main'
import Main from './DESCRIBING-UI/RENDERING LISTS/MINI-PROJECT/Main'



import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Conditional/> */}
    {/* <Project/> */}
    <Main/>
  </React.StrictMode>
);
