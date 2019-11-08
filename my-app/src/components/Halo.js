import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHalo} from '../actions/haloAction';
import HaloRank from "./HaloRank";

const Home = ({ getHalo, halodata, isFetching, error}) => {

const [hrank,setHrank] = useState([]);

    useEffect((halodata) => {
        getHalo();
    }, [getHalo]);

    if (isFetching) {
        return <h1>fetching Data!</h1>;
    }else{
   
    return (
        <>
        <div className='Halo_Rank_Container'>
        <h1>Halo Ranks</h1>
        <div className='Ranks'>
        {halodata.map(h => {
            return < HaloRank key={h.id} h={h}/>
         
        })}
        </div>
            
            <div className='Btn'>
                <button onClick={getHalo}>Get Dog Info</button>
            
            </div>

        </div>
        </>
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
    {getHalo}
)(Home);

