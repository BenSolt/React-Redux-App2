import React from "react";


export default function HaloSeason({s}) {

  //Number within Tier (1-6)
  //const aRank = h.tiers.filter(str => (str.id == 1))
           
    return (
      <div >
          <h2>{s.name}</h2>
          <h3>{s.startDate}</h3>
          <h3>{s.endDate}</h3>
            
            {/* <h3>{s.id}</h3> */}
            <img className="Tier" src={s.iconUrl} /> 
            
            {/* <img src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array02-02e21757b59540f7a9b7d39656ab855d.png"/> */}

            {s.playlists.map(s => { 
                    return (
                    <div> 
                        <h3>{s.name}</h3>
                        <h3>{s.description}</h3>
                        <h3>{s.gameMode}</h3>
                        <img src={s.id}/>
                    </div> 
                    )
                })}

           

        </div>
    )
}