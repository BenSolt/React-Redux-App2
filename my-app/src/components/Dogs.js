import React, {useEffect } from 'react';
import { connect } from 'react-redux';

import {getDogs} from '../actions/dogAction';


const Home = ({ getDogs, message, isFetching, error}) => {

    

    useEffect(() => {
        getDogs();
    }, [getDogs]);

    if (isFetching) {
        return <h1>fetching Data!</h1>;
    }
    return (
        <>
        <div className='Container'>
            <h1>DOG IMAGES</h1>

            <div className='Img'>
                <img src={message}
                alt='dog images'/>
                <h2>test</h2>
            </div>


            <div className='Btn'>
                <button onClick={getDogs}>Get Dog Info</button>
               

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
    {getDogs}
)(Home);

