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
import Project from "./3. ADDING_INTERACTIVITY/STATE/Z-MINI-PROJECT/Main.jsx"
// import Project from "./3. ADDING_INTERACTIVITY/STATE/BASICS/useState"
// import Project from "./3. ADDING_INTERACTIVITY/STATE/ARRAY/Add.jsx"
// import Project from "./3. ADDING_INTERACTIVITY/Z-MINI-PROJECT/D&I"
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main/> */}
    <Project/>
  </React.StrictMode>
);
