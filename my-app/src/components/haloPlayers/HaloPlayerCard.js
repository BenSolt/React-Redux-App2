import React from "react";



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
            <h2>GamerTag: {p.Id}</h2>
          </div>
         
          <div className="Info">
            <h3>Experience Rank: {p.Result.SpartanRank}</h3> 
            <h3>Highest Rank: {HighestRankAttained}</h3>

          

          </div>

          <div className="Stats1">
              <h4>GamesWon: {GamesWon}</h4>
              <h4>GamesLost: {GamesLost}</h4>
              <h4>GamesTied: {GamesTied}</h4>
              <h4>Deaths: {Deaths}</h4>
          </div>
          <div className="Stats2">
              <h4>Total kills: {TotalKillsPlayer}</h4>
              <h4>Assasinations: {Assasinations}</h4>
              <h4>Assists: {Assists}</h4>
          </div>

          
          {/* <h6>Total kills Vehic:{TotalKillsV}</h6> */}
      </div>

    )
}