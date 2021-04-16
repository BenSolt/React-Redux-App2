import React from "react";


export default function HaloRank({h}) {

  //Number within Tier (1-6)
  const aRank = h.tiers.filter(str => (str.id === 1))
           
  


    return (
      <div>
                
          <div className='TierHolder'>
            {/* <img  className='Banner'src={h.bannerImageUrl} /> */}

          {/* {h.tiers.map(h => { 
            return (
              <div> 
                <img className="Tier" src={h.iconImageUrl} />
              </div> 
              )
          })} */}

          {aRank.map(h => { 
            return (
              <div> 
                  <img className="Tier2" src={h.iconImageUrl} alt="rank images"/>           
              </div> 
              )
          })}

          </div>
        
      </div>

    )
}