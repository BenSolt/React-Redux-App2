import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloPlayerA} from '../../actions/haloPlayersAction';



import NavbarHalo from '../navbar/NavbarHalo';

import HaloPlayerCard from "./HaloPlayerCard";


import PlayerSearchForm from '../PlayerSearchForm';

const HaloPlayer = ({ getHaloPlayerA, halodataP, isFetching, error}) => {
  
    // const aRank = halodata.filter(str => (str.name === "Bronze"))

    //const [query, setQuery] = useState("");

    useEffect((halodataP) => {
        getHaloPlayerA();
        
    }, [getHaloPlayerA]);

    if (isFetching) {
        
        return <h1>Loading data...</h1>;
    }else{
        
    return (
        // 
            <div>
                <NavbarHalo/>
                <div>
                <PlayerSearchForm/> 
                </div>
                 
                 {/* {aRank.map(h => {
                  return < HaloRankCard key={h.id} h={h} />
                })} */}

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