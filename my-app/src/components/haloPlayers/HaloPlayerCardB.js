import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloPlayerA} from '../../actions/haloPlayersAction';

import {getHaloRankA} from '../../actions/haloRankAction';

const HaloPlayerCardB = ({ getHaloPlayerA, halodataP, getHaloRankA, halodataR, isFetching, error}) => {


    useEffect((halodataP) => {
        getHaloPlayerA();   
    }, [getHaloPlayerA]);

    useEffect((halodataR) => {
        getHaloPlayerRankA();   
    }, [getHaloPlayerRankA]);

    return (
        <div className="PlayerCard">
         
  
            <div className='Gamertag'>
              <h1> {p.Id}</h1>
            </div>
           
            <div className="Info">
              <h3>Experience Rank:</h3> <h3>{p.Result.SpartanRank}</h3>
              <h3>Highest Rank:</h3> <h3>{HighestRankAttained}</h3>
            </div>
        </div>
    )
 }