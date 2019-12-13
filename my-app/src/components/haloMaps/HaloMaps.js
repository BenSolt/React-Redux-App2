import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloMapA} from '../../actions/haloMapAction';

import HaloMapCard from "./HaloMapCard";
import NavbarHalo from '../navbar/NavbarHalo';

const HaloMaps = ({ getHaloMapA, halodataM, isFetching, error}) => {

  
  //const ArenaMaps = 
  // halodataM.map(m => { 
  //   m.filter(str => (str.supportedGameModes === "Arena"))                          
  // })

  // m.filter(str => (str.supportedGameModes === "Arena"))
  // const WarzoneMaps = halodataM.filter(str => (str.supportedGameModes === "Wazone"))
  //const WarzoneMaps = halodataM.filter(str => (str.supportedGameModes === "Campaign))
   
    
    useEffect((halodataM) => {
        getHaloMapA();
    }, [getHaloMapA]);

    if (isFetching) {
        return <h1>Loading data...</h1>;
    }else{
   
    
    return (
      <div>
      
        <h2>Halo 5 Maps</h2>

        <button className='Btn'onClick={() => (console.log('arena'))}>Arena Maps</button>
        <button className='Btn' >Warzone Maps</button>
        
          {/* <h1>{h.name}</h1> */}

        <div className="MapContainer">
          {halodataM.map(m => {
            return < HaloMapCard key={m.id} m={m}/>
            })}
        </div>  

      </div>
        
     

    )
  }
}

const mapStateToProps = state => {
    // console.log(state.halodata)
    return {
        
        halodataM: state.halodataM,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getHaloMapA}
)(HaloMaps);