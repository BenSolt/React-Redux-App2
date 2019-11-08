import React from 'react';
//import logo from './logo.svg';
import './App.css';

//MY IMPORTS
import Dogs from './components/Dogs';
import Halo from './components/Halo';
import Navbar from './components/Navbar';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>HALO INFO</h1>
      <Navbar/>
     

      <Route path="/dogs" component={Dogs}/>
      <Route path="/halo" component={Halo}/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
