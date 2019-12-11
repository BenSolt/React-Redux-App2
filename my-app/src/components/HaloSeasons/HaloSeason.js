import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloSeasonA} from '../../actions/haloSeasonsAction';
// import HaloRankCard from "./HaloRankCard";
import NavbarHalo from '../navbar/NavbarHalo';

import HaloSeasonCard from './HaloSeasonCard';

const Season = ({ getHaloSeasonA, halodataS, isFetching, error}) => {


// const aRank = halodataS.filter(str => (str.name === "Bronze"))



    useEffect((halodataS) => {
        getHaloSeasonA();
    }, [getHaloSeasonA]);

    if (isFetching) {
        return <h1>Loading data...</h1>;
    }else{
   
    return (
      
        <div className='Halo_Season_Container'>
      
        <h2>Halo Seasons</h2>
        <div className='Seasons'>
            <select id = 'select-season'>
                <option value='96164938-fc10-4851-a67e-10ee252e9d9d'>Winter 2020 Season</option>
                <option value="2041d318-dd22-47c2-a487-2818ecf14e41">Preseason</option>

                <option value="49d7a7ce-b119-4db7-8e31-2b56a9c0ca53">Winter 2019 Season</option>
                <option value="76aa3c5c-4d32-48fd-a3a5-8307e09f69f8">Spring 2019 Season</option>
                <option value="eb5044d9-db81-460d-bcdc-4f8419261c85">Summer 2019 Season</option>
                <option value="e8b16a20-d1ed-4418-907a-738d149b154f">Fall 2019 Season</option>
            </select>

        <div>
            {/* <img src='https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array04-a6b2cf1f15164557a35df91f0f5f2e85.png'/> */}
        </div>

        {halodataS.map(s => {
            return < HaloSeasonCard key={s.id} s={s}/>   
        })}  

       
        </div> 

        </div>
        
    )
  }
};

const mapStateToProps = state => {
    // console.log(state.halodata)
    return {
        
        halodataS: state.halodataS,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getHaloSeasonA}
)(Season);

