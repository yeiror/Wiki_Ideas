import React, {useContext} from 'react';
import { Link as LinkRouter } from "react-router-dom";
import {DarkModeContext} from './DarkModeProvider';


export default function NavBar() {

    const { toggleDarkMode, darkMode} = useContext(DarkModeContext);
    const handleOnChange = () => {
        toggleDarkMode();
    }


    let links = [
      {linkTo: '/', name: 'Home' },
     
    ]

  return (
    <nav className={darkMode ? 'light-nav' : 'dark-nav'}>
        
        <img src={darkMode ? '/logo_transp.png' : 'logo_white.png'} alt='logo wiki ideas'  />
        

    
     { links.map((item, key)=>{
          return <LinkRouter to={item.linkTo} key={item.name}>{item.name}</LinkRouter>
        })

        }
        <input className='search'/>
      
        <label className="button" for="toggle">
            <input id="toggle" type="checkbox" onChange={handleOnChange}/>
            <span className="slider"></span>
            </label>

    
       
        
    </nav>
    
  )
}