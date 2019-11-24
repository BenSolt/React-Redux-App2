import React from "react";
import '../Player.css';


export default function HaloPlayerCard({p}) {


                    const TotalKillsV = 
              p.Result.ArenaStats.DestroyedEnemyVehicles.map(p => {
                          return(
                              <div>Kills: {p.TotalKills}</div>    
                          )
                     })

                    const TotalKillsPlayer =
                    p.Result.ArenaStats.TotalKills
                  
                    const HighestRankAttained =
                    p.Result.ArenaStats.HighestCsrAttained.Csr

                    const Assasinations =
                    p.Result.ArenaStats.TotalAssassinations
                    const Assits =
                    p.Result.ArenaStats.TotalAssits
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
           <h3>GamerTag: {p.Id}</h3>
         </div>
         
         
          <h4>Experience Rank: {p.Result.SpartanRank}</h4> 
          <h4>Highest Rank: {HighestRankAttained}</h4>
          <h4>Total kills: {TotalKillsPlayer}</h4>

          <h4>Total kills: {TotalKillsPlayer}</h4>
         
            {/* <h6>Total kills Vehic:{TotalKillsV}</h6> */}
            
      </div>

    )
}