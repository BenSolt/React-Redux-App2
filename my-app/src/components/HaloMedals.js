import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloMedalsA} from '../actions/haloMedalAction';

import HaloMedalCard from "./HaloMedalCard";
import NavbarHalo from '../components/NavbarHalo';

const HaloMedals = ({ getHaloMedalsA, halodataMedal, isFetching, error}) => {

    // console.log(halodataM, 'map names')
    
    useEffect((halodataMedal) => {
        getHaloMedalsA();
    }, [getHaloMedalsA]);

    if (isFetching) {
        return <h1>fetching Data!</h1>;
    }else{
   
    
    return (
      <div>
        <NavbarHalo />
        <h2>Halo Medals</h2>
        
          {/* <h1>{h.name}</h1> */}

        <div className="MapContainer">
          {halodataMedal.map(m => {
            return < HaloMedalCard key={m.id} m={m}/>
            })}
        </div>  

      </div>
        
     

    )
  }
}

const mapStateToProps = state => {
    
    return {
        
        halodataMedal: state.halodataMedal,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getHaloMedalsA}
)(HaloMedals);