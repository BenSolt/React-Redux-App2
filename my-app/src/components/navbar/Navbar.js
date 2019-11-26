import React from "react";
import { NavLink } from "react-router-dom";
import MyLogo from '../../images/BenSoltWallPaper.png';
import {useDarkMode} from '../hooks/useDarkMode';




export default function Navbar() {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    }

    return(
        
    <div className='Navbarholder'>
        
        <div className='test'>
        <img className='logo' src={MyLogo}/>

            <nav className='navlinkholder'>
               
                <NavLink className='navlink' to='/'>HOME</NavLink>
                <NavLink className='navlink' to='/halo'>HALO</NavLink>
                <NavLink className='navlink' to='/default'>DEFAULT</NavLink>
                <NavLink className='navlink2' to='/search'>Search</NavLink> 
           
            </nav>

            <div className="navbar2">
                <div className="dark-mode__toggle">
                    <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    />
                </div>       
            </div>       

        </div>
        
    </div>
    )
}