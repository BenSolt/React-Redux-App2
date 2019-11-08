import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//import {getDogs} from '../actions/dogAction';
import {getHalo} from '../actions/haloAction';
import HaloRank from "./HaloRank";

const Home = ({ getHalo, halodata, isFetching, error}) => {

const [hrank,setHrank] = useState([]);

    useEffect((halodata) => {
// console.log(props)
        getHalo();
    }, [getHalo]);

    if (isFetching) {
        return <h1>fetching Data!</h1>;
    }else{
   
    return (
        <>
        <div className='Container'>
        <h1>Halo Ranks</h1>
        {halodata.map(h => {
            return < HaloRank key={h.id} h={h}/>
         
        })}
            

            <div className='Btn'>
                <button onClick={getHalo}>Get Dog Info</button>
               

            </div>

        </div>
        </>
    )
  }
};

const mapStateToProps = state => {
    console.log(state.halodata)
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

