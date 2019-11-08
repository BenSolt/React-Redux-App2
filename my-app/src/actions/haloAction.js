import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";
export const FETCHING_INFO_HALO = "ETCHING_INFO_HALO"
export const FETCHING_FAIL_HALO = "FETCHING_FAIL_HALO"


export const getHalo = () => dispatch => {
    dispatch({type: FETCHING_INFO_HALO});
    //axios
    axiosWithAuth()
    //RANKS?
    .get('metadata/h5/metadata/csr-designations')
    //PLAYER STATS 
    //.get ('stats/h5/servicerecords/arena?players={players}[&seasonId]') 
    .then(res => {
        console.log(res)
        dispatch({type: FETCHING_INFO_HALO, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAIL_HALO,
            payload: err.response
        });
    });
};