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
            </div>

        </nav>

    )}