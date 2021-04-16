import axiosWithAuth from "../utils/axiosWithAuth";
export const FETCHING_INFO_SEASON = "ETCHING_INFO_SEASON"
export const FETCHING_FAIL_SEASON = "FETCHING_FAIL_SEASON"
export const FETCHING_INFO_SEASON_SUCCESS = 'FETCHING_INFO_SEASON_SUCCESS'

export const getHaloSeasonA = () => dispatch => {
    dispatch({type: FETCHING_INFO_SEASON});
      //axios
     axiosWithAuth()
     .get('metadata/h5/metadata/seasons')
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCHING_INFO_SEASON_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAIL_SEASON,
            payload: err.response
        });
    });
};