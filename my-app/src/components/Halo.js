import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//import {getDogs} from '../actions/dogAction';
import {getHalo} from '../actions/haloAction';


const Home = ({ getHalo, name, isFetching, error}) => {

    

    useEffect(() => {
        getHalo();
    }, [getHalo]);

    if (isFetching) {
        return <h1>fetching Data!</h1>;
    }
    return (
        <>
        <div className='Container'>
            <div>RANK IMAGES</div>

            <div className='Img'>
                <img src={name}/>
            </div>


            <div className='Btn'>
                <button onClick={getHalo}>Get Dog Info</button>
               

            </div>

        </div>
        </>
    )
};

const mapStateToProps = state => {
    return {
        message: state.message,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getHalo}
)(Home);

