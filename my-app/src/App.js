import React from 'react';

import './css/App.css';
import './css/home.css';
import './css/medals.css';
import './css/Navbar.css';
import './css/Player.css';
import './css/haloMap.css';

//MY IMPORTS
import Home from './components/Home';
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
import Navbar from './components/navbar/Navbar';
import NavbarHalo from './components/navbar/NavbarHalo';

import { Route } from "react-router-dom";
import SearchForm from './components/PlayerSearchForm';



function App() {
  return (

    <div className="App">
     
        <Navbar />  
      
      <div>
      <Route exact path="/" component={Home}/>
      <Route path="/projects" component={Codework}/>
      <Route path="/artwork" component={Artwork}/>
      
      <Route exact path="/halo" component={NavbarHalo}/>
      <Route path="/default" component={Default}/>
      {/* <Route path="/dogs" component={Dogs}/> */}
      <Route path="/halorank" component={HaloRank} />
      <Route path="/haloplayers" component={HaloPlayer} />
      <Route path="/halomaps" component={HaloMaps}/>
      <Route path="/halomedals" component={HaloMedals}/>

      <Route path="/haloplayers2" component={HaloPlayerB} />


      </div>
      
    </div>

  );
}

export default App;
