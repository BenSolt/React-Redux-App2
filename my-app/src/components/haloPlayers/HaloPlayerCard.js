import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

import HaloRankCardB from "../haloRanks/HaloRankCardB";
import HaloRankCard from "../haloRanks/HaloRankCard";



export default function HaloPlayerCard({p}) {

  const [rankData, setRankData] = useState([]);
  // const aRank = rankData.filter(str => (str.name === "Bronze"))

//   useEffect((halodataR) => {
//     getHaloRankA();
// }, [getHaloRankA]);

                    const TotalKillsV = 
              p.Result.ArenaStats.DestroyedEnemyVehicles.map(p => {
                          return(
                              <div>Kills: {p.TotalKills}</div>    
                          )
                     })

                    const TotalKillsPlayer =
                    p.Result.ArenaStats.TotalKills
                  
                    const HighestRankAttained =
                    p.Result.ArenaStats.HighestCsrAttained ?
                    p.Result.ArenaStats.HighestCsrAttained.Csr : null



                    // const test =
                    // p.Result.ArenaStats.ArenaPlaylistStats.map(p => {
                    //   return(
                    //     <div>{p.Csr.DesignationId}</div>
                    //   )
                    // })
                       

                      //   function RankImage(HighestRankAttained) { 
                      //     var image = "";
                      //     if (HighestRankAttained > 1500) {
                      //         image = "https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6.png"
                      //     } 
                      //     else {
                      //         image = "https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/unranked_00-61fca949c33f433ba7e7507d97ff130f.png"
                      //     }  
                      //     return image;
                      // }
                    
                    
                   

                    const Assasinations =
                    p.Result.ArenaStats.TotalAssassinations
                    const Assists =
                    p.Result.ArenaStats.TotalAssists
                    const Deaths =
                    p.Result.ArenaStats.TotalDeaths

                    const GamesLost =
                    p.Result.ArenaStats.TotalGamesLost
                    const GamesWon =
                    p.Result.ArenaStats.TotalGamesWon
                    const GamesTied =
                    p.Result.ArenaStats.TotalGamesTied



    return (
      <div className="PlayerCard">
       

          <div className='Gamertag'>
            <h1> {p.Id}</h1>
          </div>
         
          <div className="Info">
            <h3>Experience Rank:</h3> <h3>{p.Result.SpartanRank}</h3>
            <h3>Highest Rank:</h3> <h3>{HighestRankAttained}</h3>
            {/* <h3>test playlist:</h3> <h3>{test}</h3> */}


            {/* <img class="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6.png"></img> */}
            
            {/* {aRank.map(h => {
                  return < HaloRankCard key={h.id} h={h} />
                })}  */}

            

          </div>

          <div className="Stats1">
              <div className='Textholder'>
                <h4 className='textgold'>GAMES WON</h4><h5 className="h5A">{GamesWon}</h5>
              </div> 
              <div className='Textholder'>
                <h4 className='textgold'>GAMES LOST</h4> <h5 className="h5A">{GamesLost}</h5>
              </div>
              <div className='Textholder'>
                <h4 className='textgold'>GAMES TIED</h4> <h5 className="h5A">{GamesTied}</h5>
              </div>
              <div className='Textholder'>
                <h4 className='textgold'>DEATHS</h4> <h5 className="h5A">{Deaths}</h5>
              </div>
          </div>
          
          <div className="Stats2">
              <div className='Textholder'>
                <h4 className='textgold'>TOTAL KILLS</h4> <h5 className="h5B">{TotalKillsPlayer}</h5>
              </div>
              <div className='Textholder'>
                <h4 className='textgold'>ASSASINATIONS</h4> <h5 className="h5B">{Assasinations}</h5>
              </div>
              <div className='Textholder'>
                <h4 className='textgold'>ASSISTS</h4> <h5 className="h5B">{Assists}</h5>
              </div>       
          </div>

          
          {/* <h6>Total kills Vehic:{TotalKillsV}</h6> */}
      </div>

    )
}