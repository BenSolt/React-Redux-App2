import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getHaloMedalsA} from '../../actions/haloMedalAction';

import HaloMedalCard from "./HaloMedalCard";
import NavbarHalo from '../navbar/NavbarHalo';

const HaloMedals = ({ getHaloMedalsA, halodataMedal, isFetching, error}) => {

    
    // const aMedal = halodataMedal.filter(str => (str.name === "Carrier Protected"))
    
    useEffect((halodataMedal) => {
        getHaloMedalsA();
    }, [getHaloMedalsA]);

    if (isFetching) {
        return <h1>Loading data...</h1>;
    }else{
   
    
    return (
      <div>
        
        <h2>Halo Medals</h2>
        
          {/* <h1>{h.name}</h1> */}

        <div className="MapContainer">
          {halodataMedal.map(m => {
            return < HaloMedalCard key={m.id} m={m}/>
            })}
            
          {/* {aMedal.map(m => {
            return < HaloMedalCard key={m.id} m={m}/>
            })} */}


            {/* {halodataMedal.map(item => {
                    if(item.id === id) {
                      return {
                        ...item,
                        purchased: !item.purchased
                      }
                    }else{
                      return item;
                    }
                  })} */}
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