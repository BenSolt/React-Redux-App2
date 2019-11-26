import React from "react";
import Atlantis from '../images/BenSoltAtlantisTemple.png'; 
import Factory from '../images/BenSoltFactory.png'; 
import Hydra from '../images/BenSoltHydraRoost.png'; 
import Refinery from '../images/BenSoltRefinery.png'; 
import Temple from '../images/BenSoltWaterTemple.png';
import Waterwheel from '../images/BenSoltWaterWheel.png';
import Well from '../images/BenSoltWell.png';   

import '../css/artworkk.css';


export default function Artwork() {

    return(
        <div className='imagecontainer'>
            <h1 className='margintext'>ARTWORK HERE!</h1>
            <div>
            <img className='myImgs' src={Atlantis}/>
            <img className='myImgs' src={Factory}/>
            <img className='myImgs' src={Hydra}/>
            <img className='myImgs' src={Refinery}/>
            <img className='myImgs' src={Temple}/>
            <img className='myImgs' src={Waterwheel}/>
            <img className='myImgs' src={Well}/>
            </div>
        </div>
    )
}