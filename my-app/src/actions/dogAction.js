import axios from 'axios';
// import React, {useState} from 'react';
export const FETCHING_INFO = "FETCHING_INFO"
export const FETCHING_FAIL = "FETCHING_FAIL"


export const getDogs = () => dispatch => {

    // const [breed, setBreed] = useState("mix");

    dispatch({type: FETCHING_INFO});
    axios
    .get(`https://dog.ceo/api/breed/hound/images/random`)
    //hound
    .then(res => {
        console.log(res)
        dispatch({type: FETCHING_INFO, payload: res.data.message})
        
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAIL,
            payload: err.response.message
        });
    },);
    //[breed]
    
};