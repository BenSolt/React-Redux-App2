import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloA} from '../actions/haloAction';
import HaloRankCard from "./HaloRankCard";
import NavbarHalo from '../components/NavbarHalo';

const Home = ({ getHaloA, halodata, isFetching, error}) => {


const aRank = halodata.filter(str => (str.name === "Bronze"))

//const [hrank,setHrank] = useState([]);

    useEffect((halodata) => {
        getHaloA();
    }, [getHaloA]);

    if (isFetching) {
        return <h1>fetching Data!</h1>;
    }else{
   
    return (
      
        <div className='Halo_Rank_Container'>
            <NavbarHalo/>
        <h2>Halo Ranks</h2>
        <div className='Ranks'>
        
    {/* {halodata.map(h => { */}
       {aRank.map(h => {
        
        return < HaloRankCard key={h.id} h={h} />
            
        })}  

        </div> 

        </div>
        
    )
  }
};

const mapStateToProps = state => {
    // console.log(state.halodata)
    return {
        
        halodata: state.halodata,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getHaloA}
)(Home);

