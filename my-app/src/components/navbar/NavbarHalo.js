import React from "react";
import { NavLink } from "react-router-dom";
import {useDarkMode} from '../hooks/useDarkMode';




export default function Navbar() {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    }

    return(
        
    <div className='Navbarholder'>
        
        <div className='flexnav'>


            <nav className='navlinkholder'>
               
                <NavLink className='navlinkHalo' to='/'>HOME</NavLink>
                

                <nav>
                <NavLink className='navlinkHalo' to='/halorank'>HALO RANKS</NavLink>
                <NavLink className='navlinkHalo' to='/haloplayers2'>HALO PLAYERS</NavLink>
                <NavLink className='navlinkHalo' to='/halomaps'>HALO MAPS</NavLink>
                <NavLink className='navlinkHalo' to='/halomedals'>HALO MEDALS</NavLink>
                
                <NavLink className='navlinkHalo' to='/seasons'>HALO SEASON</NavLink>

                {/* <NavLink className='navlinkHalo' to='/haloplayers'>H PLAYERS TEST</NavLink> */}

            </nav> 

                 {/* <NavLink className='navlink' to='/default'>DEFAULT</NavLink> */}
           

           
            </nav>
            <div className="NavbarholderDark">
                <h5 className="navtext">Darkmode</h5>
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