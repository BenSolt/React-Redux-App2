// import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";
export const FETCHING_INFO_HALO = "ETCHING_INFO_HALO"
export const FETCHING_FAIL_HALO = "FETCHING_FAIL_HALO"
export const FETCHING_INFO_HALO_SUCESS = 'FETCHING_INFO_HALO_SUCESS'

export const getHaloRankA = () => dispatch => {
    dispatch({type: FETCHING_INFO_HALO});
      //axios
     axiosWithAuth()
    //  .get('https://www.haloapi.com/metadata/h5/metadata/csr-designations')
     .get('/metadata/h5/metadata/csr-designations')
  
    ///  .get('metadata/h5/metadata/csr-designations')
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCHING_INFO_HALO_SUCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAIL_HALO,
            payload: err.response
        });
    });
};