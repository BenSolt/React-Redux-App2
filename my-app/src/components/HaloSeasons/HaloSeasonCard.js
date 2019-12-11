import React from "react";


export default function HaloSeason({s}) {

  //Number within Tier (1-6)
  //const aRank = h.tiers.filter(str => (str.id == 1))
           
    return (
      <div>
          <h2>{s.name}</h2>
            {/* <h3>{s.contentId}</h3> */}
            {/* <h3>{s.id}</h3> */}
            <img className="Tier" src={s.iconUrl} /> 
            
                

            {/* {s.playlists.map(h => { 
                    return (
                    <div> 
                        <h3>{h.gameMode}</h3>
                        <img src={h.id}/>
                    </div> 
                    )
                })} */}

           

        </div>
    )
}