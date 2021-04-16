import React from "react";
// import Imag from '../api-halo5.jpg';

export default function Home() {


    return(
        <div className='homebox'>
           <div className="text">
            <h1 className='textwhite'>Microsoft 343 Studios - HALO 5 API </h1>

            <h2 className='textwhite'>Click on Halo Ranks, Halo Players, Halo Maps, and Halo Medals
            to view said info from api.
            <br/>
            <h4 className='textwhite'>All data is from Microsoft 343</h4>
            </h2>

            {/* <div className='Seasons'>
                <select id = 'select-season' className='select'>
                    <option>Winter 2020 Season</option>
                    <option>Preseason</option>
                </select>
            </div>  */}
            
           </div>
        
        </div>
    )
}