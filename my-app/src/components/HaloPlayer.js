import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloPlayerA} from '../actions/haloPlayersAction';
import NavbarHalo from '../components/NavbarHalo';

import HaloPlayerCard from "./HaloPlayerCard";

const HaloPlayer = ({ getHaloPlayerA, halodataP, isFetching, error}) => {

    const [query, setQuery] = useState("");

    useEffect((halodataP) => {
        getHaloPlayerA();
     
    }, [getHaloPlayerA]);

    if (isFetching) {
        
        return <h1>fetching Data!2</h1>;
    }else{
        
    return (
        // 
            <div>
                <NavbarHalo/>
                 <h2>Halo Players</h2>
    


                 {halodataP.map(p => {
                    return < HaloPlayerCard key={p.Id} p={p}/>
                })}
               
                     



            </div>
        
    )}};

const mapStateToProps = state => {
//   console.log(state.halodataP)
  return {
      
      halodataP: state.halodataP,
      isFetching: state.isFetching,
      error: state.error
  };
};

export default connect(
  mapStateToProps,
  {getHaloPlayerA}
)(HaloPlayer);