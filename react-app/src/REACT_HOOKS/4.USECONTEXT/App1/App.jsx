import React from 'react';
import THEME_PROVIDER from '../Provider';
import NavBar from '../NavBar';
import Footer from '../Footer';

const style ={
    width  :'100%',
    height  :'95vh',
    display : 'flex',
    justifyContent : 'center',
    alignItems  :'center',
    flexDirection : 'row',
    gap : '1rem'
}

export default function App(){
    return(
        <THEME_PROVIDER>
            <div style={style}>
                <NavBar/>
                <Footer/>
            </div>
        </THEME_PROVIDER>
    );
}