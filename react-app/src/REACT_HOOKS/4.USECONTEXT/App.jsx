import React from 'react';
import ThemeProvider from './Provider';
import NavBar from './NavBar';
import Footer from './Footer';

export default function App(){
    return(
        <ThemeProvider>
            <NavBar/>
            <Footer/>
        </ThemeProvider>
    );
}