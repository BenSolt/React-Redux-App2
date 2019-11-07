import axios from 'axios';

export const FETCHING_INFO = "FETCHING_INFO"
export const FETCHING_FAIL = "FETCHING_FAIL"

export const getHalo = () => dispatch => {
    dispatch({type: FETCHING_INFO})
    axios
    .get('') // <-- API
    .then(res => {
        console.log(res)
        dispatch({type: FETCHING_INFO, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAIL,
            payload: err.response
        });
    });
};