import React from 'react';

import './css/App.css';
import './css/medals.css';
import './css/Navbar.css';
import './css/Player.css';
import './css/haloMap.css';
import './css/rank.css';
import './css/haloSeason.css';

//MY IMPORTS

import Home from './components/Home';

import HaloRank from './components/haloRanks/HaloRank';
import HaloMaps from './components/haloMaps/HaloMaps';
import HaloMedals from './components/haloMedals/HaloMedals';
import HaloPlayerB from './components/haloPlayers/HaloPlayerB';

// import HaloSeason from './components/HaloSeasons/HaloSeason';
// import HaloPlayer from './components/haloPlayers/HaloPlayer';

// import Dogs from './components/Dogs';


//NAV BAR
import NavbarHalo from './components/navbar/NavbarHalo';

import { Route } from "react-router-dom";
// import SearchForm from './components/PlayerSearchForm';



function App() {
  return (

    <div className="App">
     
        <NavbarHalo />
       
      
      <div>
      
      <Route exact path="/" component={Home}/>
      <Route path="/halorank" component={HaloRank} />
      <Route path="/halomaps" component={HaloMaps}/>
      <Route path="/halomedals" component={HaloMedals}/>
      <Route path="/haloplayers" component={HaloPlayerB} />

      {/* <Route path="/seasons" component={HaloSeason}/> */}

      {/* <Route path="/dogs" component={Dogs} /> */}
     


      </div>
      
    </div>

  );
}

export default App;
