import React, { Component } from "react";

const players = [
    // {name:'Xtianumbra'},
    // {name:'Etherblades89'},
    
  ]



class App extends Component {
  state = {
    search: ""
  };

  renderPlayer = player => {
    const { search } = this.state;
    var code = player.name.toLowerCase();

 

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <div>
          <div>
           
            <h1 title={player.name}>
              {player.name.substring(0, 15)}
              {player.name.length > 15 && "..."}
            </h1>
          </div>
        </div>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filterPlayers = players.filter(p => {
      return p.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div>
            <div>
              <div className="Searchbar" >
              <h3>Search Player:</h3>
            
                <input className="Input"
                  label="Search player"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
            <div>
              {filterPlayers.map(player => {
                return this.renderPlayer(player);
              })}
            </div>
          </div>   
      </div>
    );
  }
}

export default App;
