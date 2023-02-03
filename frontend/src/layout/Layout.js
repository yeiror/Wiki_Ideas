import React, {useContext} from 'react'
import NavBar from '../components/NavBar'
import {DarkModeContext} from '../components/DarkModeProvider';
import Footer from '../components/Footer';

export default function Layout(props) {
  const {darkMode}= useContext(DarkModeContext);
 
  return (
    <>
    <NavBar/>
    <main id={darkMode ? 'light' : 'dark'}>
    {props.children}
    </main>
    <Footer props={darkMode}/>
    </>
  )
}
