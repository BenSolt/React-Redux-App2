import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloPlayer} from '../actions/haloPlayersAction';

const HaloPlayer = ({ getHaloPlayer, halodata, isFetching, error}) => {

    
    useEffect((halodata) => {
        getHaloPlayer();
    }, [getHaloPlayer]);

    if (isFetching) {
        return <h1>fetching Data!2</h1>;
    }else{
   
    return (
        <>
            <div>
                <h1>Halo PLAYERS</h1>
            </div>
        </>
    )}};

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
  {getHaloPlayer}
)(HaloPlayer);