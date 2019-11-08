import React from "react";

export default function HaloRank({h}) {
  // console.log('tiers',h )
    return (
      <div className="names">
          <h1>{h.name}</h1>

          <div>
            {/* <img  className='Banner' src={h.bannerImageUrl}/> */}

            {h.tiers.map(h => {
            return <img className="Tier" src={h.iconImageUrl}/>
         
        })}
          </div>
        
      </div>

    )
}