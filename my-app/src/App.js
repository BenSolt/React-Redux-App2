import React from 'react';
//import logo from './logo.svg';
import './App.css';

//MY IMPORTS
import Dogs from './components/Dogs';
import Halo from './components/Halo';
import HaloPlayer from './components/HaloPlayer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route } from "react-router-dom";
import PlayerSearchForm from './components/PlayerSearchForm';

function App() {
  return (
    <div className="App">
      <h1>HALO INFO</h1>
      <Navbar/>

      <PlayerSearchForm/>

      <Route exact path="/" component={Home}/>
      <Route path="/dogs" component={Dogs}/>
      <Route path="/halo" component={Halo}/>
      <Route path="/haloplayers" component={HaloPlayer}/>

      
    </div>
  );
}

export default App;
