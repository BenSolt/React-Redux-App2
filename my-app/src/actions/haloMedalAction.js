import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";
export const FETCHING_INFO_HALO_MEDAL = "FETCHING_INFO_HALO_MEDAL"
export const FETCHING_FAIL_HALO_MEDAL  = "FETCHING_FAIL_HALO_MEDAL"
export const FETCHING_INFO_HALO_SUCESS_MEDAL  = 'FETCHING_INFO_HALO_SUCESS_MEDAL'

export const getHaloMedalsA = () => dispatch => {
    dispatch({type: FETCHING_INFO_HALO_MEDAL});
     axiosWithAuth()
    //PLAYER STATS 
    .get('https://www.haloapi.com/metadata/h5/metadata/medals')
    .then(res => {
        console.log(res.data,'medal info')
        dispatch({type: FETCHING_INFO_HALO_SUCESS_MEDAL, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAIL_HALO_MEDAL,
            payload: err.response
        });
    });
};