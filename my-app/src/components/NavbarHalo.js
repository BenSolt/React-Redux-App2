import React from "react";
import { NavLink } from "react-router-dom";
import PlayerSearchForm from './PlayerSearchForm';
export default function NavbarHalo(props) {

    return(

        <nav>

            <div>
                <NavLink className='navlinkHalo' to='/halorank'>HALO RANKS</NavLink>
                <NavLink className='navlinkHalo' to='/haloplayers'>HALO PLAYERS</NavLink>
                <NavLink className='navlinkHalo' to='/halomaps'>HALO MAPS</NavLink>
                <NavLink className='navlinkHalo' to='/halomedals'>HALO MEDALS</NavLink>

                <div className='search-form'>
                <PlayerSearchForm/>
                </div>

            </div>


        </nav>

    )}