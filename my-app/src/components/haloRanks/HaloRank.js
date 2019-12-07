import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloRankA} from '../../actions/haloRankAction';
import HaloRankCard from "./HaloRankCard";
import NavbarHalo from '../navbar/NavbarHalo';

const Home = ({ getHaloRankA, halodataR, isFetching, error}) => {


const aRank = halodataR.filter(str => (str.name === "Bronze"))

//const [hrank,setHrank] = useState([]);

    useEffect((halodataR) => {
        getHaloRankA();
    }, [getHaloRankA]);

    if (isFetching) {
        return <h1>Loading data...</h1>;
    }else{
   
    return (
      
        <div className='Halo_Rank_Container'>
      
        <h2>Halo Ranks</h2>
        <div className='Ranks'>
        
        
        {halodataR.map(h => {
        
        return < HaloRankCard key={h.id} h={h} />
            
        })}  

       {/* {aRank.map(h => {
        
        return < HaloRankCard key={h.id} h={h} />
            
        })}   */}

        </div> 

        </div>
        
    )
  }
};

const mapStateToProps = state => {
    // console.log(state.halodata)
    return {
        
        halodataR: state.halodataR,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getHaloRankA}
)(Home);

