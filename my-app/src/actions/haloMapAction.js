// import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";
export const FETCHING_INFO_HALO_MAP = "FETCHING_INFO_HALO_MAP"
export const FETCHING_FAIL_HALO_MAP  = "FETCHING_FAIL_HALO_MAP"
export const FETCHING_INFO_HALO_SUCESS_MAP  = 'FETCHING_INFO_HALO_SUCESS_MAP'

export const getHaloMapA = () => dispatch => {
    dispatch({type: FETCHING_INFO_HALO_MAP});
     axiosWithAuth()
    //PLAYER STATS 
    .get ('https://www.haloapi.com/metadata/h5/metadata/maps')
    .then(res => {
        console.log(res.data,'player info')
        dispatch({type: FETCHING_INFO_HALO_SUCESS_MAP, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAIL_HALO_MAP,
            payload: err.response
        });
    });
};