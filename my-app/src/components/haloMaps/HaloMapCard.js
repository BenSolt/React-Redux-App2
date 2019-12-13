import React from "react";


export default function HaloMapCard({m}) {
  // console.log('tiers',h )
    return (
      <div className="Mapcard">
          <h3>{m.name}</h3>
          <img className="MapImage" src={m.imageUrl}/>
          <h4>{m.description}</h4>
          {/* {m.supportedGameModes} */}
           {/* {m.filter(str => (str.supportedGameModes === "Warzone"))} */}
      </div>

    )
}