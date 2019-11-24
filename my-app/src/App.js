import React from 'react';
//import logo from './logo.svg';
import './App.css';

//MY IMPORTS
import Home from './components/Home';
import Test from './components/Test';
import Default from './components/Default';
import Dogs from './components/Dogs';
import HaloRank from './components/HaloRank';
import HaloPlayer from './components/HaloPlayer';
import HaloMaps from './components/HaloMaps';
import HaloMedals from './components/HaloMedals';

//NAV BAR
import Navbar from './components/Navbar';
import NavbarHalo from './components/NavbarHalo';

import { Route } from "react-router-dom";
import SearchForm from './components/PlayerSearchForm';



function App() {
  return (
    <div className="App">
      <h1>HALO INFO</h1>
      <Navbar />
     
      <div className='routes'>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/" component={Test}/> */}
      <Route path="/search" component={SearchForm}/>
      <Route exact path="/halo" component={NavbarHalo}/>
      <Route path="/default" component={Default}/>
      {/* <Route path="/dogs" component={Dogs}/> */}
      <Route path="/halorank" component={HaloRank} />
      <Route path="/haloplayers" component={HaloPlayer} />
      <Route path="/halomaps" component={HaloMaps}/>
      <Route path="/halomedals" component={HaloMedals}/>
      </div>
      
    </div>
  );
}

export default App;
