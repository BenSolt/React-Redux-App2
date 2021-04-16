import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloMedalsA} from '../../actions/haloMedalAction';

import HaloMedalCard from "./HaloMedalCard";
// import NavbarHalo from '../navbar/NavbarHalo';

const HaloMedals = ({ getHaloMedalsA, halodataMedal, isFetching, error}) => {
  
    useEffect((halodataMedal) => {
        getHaloMedalsA();
    }, [getHaloMedalsA]);

    if (isFetching) {
        return <h1>Loading data...</h1>;
    }else{
    
    return (
      <div>
        
        <h2>Halo Medals</h2>
        
        <div className="MapContainer">
          {halodataMedal.map(m => {
            return < HaloMedalCard key={m.id} m={m}/>
            })}
            
        </div>  

      </div>
        
    )
  }
}

const mapStateToProps = state => {
    
    return {
        
        halodataMedal: state.halodataMedal,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getHaloMedalsA}
)(HaloMedals);