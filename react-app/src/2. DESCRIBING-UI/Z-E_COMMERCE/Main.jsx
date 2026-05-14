import React from 'react';
import SideBar from './SideBar';
export default function App(){
    return(
            <div style={{background : 'linear-gradient(90deg,#B373FD,#CDADFA,#E6E6FA)',
                width : '100%',
                height : '100vh',
                margin : 0,
                padding : '10px',
                boxSizing : 'border-box',
                position : 'fixed',
                top : 0,
                left : 0
            }}>
                <SideBar/>
            </div>
    );
}