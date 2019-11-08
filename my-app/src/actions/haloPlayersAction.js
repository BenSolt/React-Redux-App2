import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";
export const FETCHING_INFO_HALO_PLAYER = "FETCHING_INFO_HALO_PLAYER"
export const FETCHING_FAIL_HALO_PLAYER = "FETCHING_FAIL_HALO_PLAYER"
export const FETCHING_INFO_HALO_SUCESS_PLAYER = 'FETCHING_INFO_HALO_SUCESSPLAYER'

export const getHaloPlayer = () => dispatch => {
    dispatch({type: FETCHING_INFO_HALO_PLAYER});
     axiosWithAuth()
    //PLAYER STATS 
    .get ('stats/h5/servicerecords/arena?players={players}') 
    //{players}[&seasonId]
    //.get ('https://www.haloapi.com/metadata/h5/metadata/maps')
    .then(res => {
        console.log(res.data,'player info')
        dispatch({type: FETCHING_INFO_HALO_SUCESS_PLAYER, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAIL_HALO_PLAYER ,
            payload: err.response
        });
    });
};