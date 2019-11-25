import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloMapA} from '../../actions/haloMapAction';

import HaloMapCard from "./HaloMapCard";
import NavbarHalo from '../navbar/NavbarHalo';

const HaloMaps = ({ getHaloMapA, halodataM, isFetching, error}) => {

    // console.log(halodataM, 'map names')
    
    useEffect((halodataM) => {
        getHaloMapA();
    }, [getHaloMapA]);

    if (isFetching) {
        return <h1>Loading data...</h1>;
    }else{
   
    
    return (
      <div>
        <NavbarHalo />
        <h2>Halo</h2>
        
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