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

// import App from './SPA/bundle';
// import Import from './DESCRIBING-UI/ImportExport'
// import Render from './DESCRIBING-UI/RENDERING LISTS/Basic _Rendering_lists'
// import Filter from './DESCRIBING-UI/RENDERING LISTS/FILTERING_LISTS USING IMPORT AND EXPORT/Filtering_Lists'
import Mini from './DESCRIBING-UI/RENDERING LISTS/MINI-PROJECT/Main'



import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Import/> */}
    {/* <Render/> */}
    {/* <Filter/> */}
    <Mini/>
  </React.StrictMode>
);