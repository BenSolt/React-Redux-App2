import React from "react";
import { NavLink } from "react-router-dom";

export default function Navig() {

    return(

        <nav>

            <div>
                <NavLink className='navlink' to='/'>HOME</NavLink>
            </div>

            <div>
                <NavLink className='navlink' to='/dogs'>DOGS</NavLink>
                <NavLink className='navlink' to='/halo'>HALO RANKS</NavLink>
                <NavLink className='navlink' to='/haloplayers'>HALO PLAYERS</NavLink>
            </div>

        </nav>

    )}