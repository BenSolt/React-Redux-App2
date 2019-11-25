import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    return(
        
    <div className='Navbarholder'>
        
        <div>
            <nav>
                <NavLink className='navlink' to='/'>HOME</NavLink>
                <NavLink className='navlink' to='/halo'>HALO</NavLink>
                <NavLink className='navlink' to='/default'>DEFAULT</NavLink>
                <NavLink className='navlink' to='/search'>Search</NavLink>

                {/* <NavLink className='navlink' to='/dogs'>DOGS</NavLink> */}
                {/* <NavLink className='navlink' to='/halorank'>HALO RANKS</NavLink>
                <NavLink className='navlink' to='/haloplayers'>HALO PLAYERS</NavLink>
                <NavLink className='navlink' to='/halomaps'>HALO MAPS</NavLink> */}
            </nav>
        </div>
    </div>
    )}