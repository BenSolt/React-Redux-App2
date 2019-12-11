import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloPlayerA} from '../../actions/haloPlayersAction';

import {getHaloRankA} from '../../actions/haloRankAction';


import NavbarHalo from '../navbar/NavbarHalo';

import HaloPlayerCard from "./HaloPlayerCard";
import HaloRankCard from "../haloRanks/HaloRankCard";

import PlayerSearchForm from '../PlayerSearchForm';

const HaloPlayer = ({ getHaloPlayerA, halodataP, getHaloRankA, halodataR, isFetching, error}) => {
  
     const aRank = halodataR.filter(str => (str.name === "Diamond"))

    //const [query, setQuery] = useState("");

    useEffect((halodataP) => {
        getHaloPlayerA();   
    }, [getHaloPlayerA]);

    useEffect((halodataR) => {
      getHaloRankA();
  }, [getHaloRankA]);

    if (isFetching) {
        
        return <h1>Loading data test...</h1>;
    }else{
        
    return (
        // 
            <div>
            
                <div>
                <PlayerSearchForm/> 
                </div>
                 
                 
                    {aRank.map(h => {
                      return < HaloRankCard key={h.id} h={h} />
                      
                    })} 

                      {halodataP.map(p => {
                        return < HaloPlayerCard key={p.Id} p={p}
                        
                        />
                    })}
            
                  


            </div>
        
    )}};

const mapStateToProps = state => {
//   console.log(state.halodataP)
  return {
    halodataR: state.halodataR,
    halodataP: state.halodataP,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {getHaloPlayerA, getHaloRankA},
  
)(HaloPlayer);