import React from "react";

export default function HaloRank({h}) {
    return (
      <div>
          <h1>{h.name}</h1>
        <img src={h.bannerImageUrl}/>

      </div>

    )
}