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
// load local Font Awesome CSS (installed via npm)
import '@fortawesome/fontawesome-free/css/all.min.css';

// ----------------------------MY IMPORTED FILES---------------------------
// import Project from "./REACT_HOOKS/1.USESTATE/GESTURE_PATTERN_VAULT/GPV.jsx"
import Project from "./REACT_HOOKS/1.USESTATE/PASSWORD_STRENGTH_CHECKER/MainPSC.jsx"
// import Project from "./REACT_HOOKS/1.USESTATE/FONT-PLAYGROUND/FP.jsx"
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Project />
    {/* <Events /> */}
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