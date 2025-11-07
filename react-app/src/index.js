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

import React from "react";
import ReactDOM from "react-dom/client";
// import Project from "./REACT HOOKS-DANIEL BUGL/1. INTRO TO USESTATE.JSX";
import Project from "./REACT_HOOKS/BLOG/Main.jsx";
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Project />
  </React.StrictMode>
);

// Optional manual render if building custom hooks
// const root = ReactDOM.createRoot(document.getElementById('root'))
// export function renderApp() {
//   root.render(
//     <React.StrictMode>
//       <Project />
//     </React.StrictMode>
//   );
// }
// renderApp();