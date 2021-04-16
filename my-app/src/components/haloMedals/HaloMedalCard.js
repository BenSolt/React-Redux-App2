import React, {useState} from "react";



export default function HaloMedalCard({m}) {


    return (
      <div className="Medalcard">

          <h3>{m.name}</h3>
          <h3>{m.description}</h3>
    
          <div className='spriteholder'>
            <img className="sprite" src={m.spriteLocation.spriteSheetUri}
                style={{
                objectFit: "none",
                objectPosition: `-${m.spriteLocation.left}px -${m.spriteLocation.top}px`
                }}
              />

          </div>
         
      </div>

    )
}