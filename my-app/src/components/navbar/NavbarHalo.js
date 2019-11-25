import React from "react";
import { NavLink } from "react-router-dom";
import PlayerSearchForm from '../PlayerSearchForm';
export default function NavbarHalo(props) {

    return(

    <div className='Navbarholderhalo'>
          
        <div>
        {/* <h3>HALO INFO</h3> */}
            <nav>
                <NavLink className='navlinkHalo' to='/halorank'>HALO RANKS</NavLink>
                <NavLink className='navlinkHalo' to='/haloplayers'>HALO PLAYERS</NavLink>
                <NavLink className='navlinkHalo' to='/halomaps'>HALO MAPS</NavLink>
                <NavLink className='navlinkHalo' to='/halomedals'>HALO MEDALS</NavLink>
            </nav> 

            {/* <div className='search-form'>
                <PlayerSearchForm/>
                </div>  */}
        </div>
    </div>

    )}