import React from 'react';

import './css/App.css';
import './css/home.css';
import './css/medals.css';
import './css/Navbar.css';
import './css/Player.css';
import './css/haloMap.css';
import './css/rank.css';

//MY IMPORTS

import Default from './components/Default';
import Dogs from './components/Dogs';
import HaloRank from './components/haloRanks/HaloRank';
import HaloPlayer from './components/haloPlayers/HaloPlayer';
import HaloMaps from './components/haloMaps/HaloMaps';
import HaloMedals from './components/haloMedals/HaloMedals';
import HaloPlayerB from './components/haloPlayers/HaloPlayerB';
import Artwork from './components/Artwork';
import Codework from './components/codework';



//NAV BAR
import NavbarHalo from './components/navbar/NavbarHalo';

import { Route } from "react-router-dom";
import SearchForm from './components/PlayerSearchForm';



function App() {
  return (

    <div className="App">
     
        <NavbarHalo />
       
      
      <div>
      
   
      
      {/* <Route exact path="/" component={NavbarHalo}/> */}
      
      {/* <Route path="/dogs" component={Dogs}/> */}
      <Route path="/halorank" component={HaloRank} />
      {/* <Route path="/haloplayers" component={HaloPlayer} /> */}
      <Route path="/halomaps" component={HaloMaps}/>
      <Route path="/halomedals" component={HaloMedals}/>

      <Route path="/haloplayers2" component={HaloPlayerB} />


      </div>
      
    </div>

  );
}

export default App;
