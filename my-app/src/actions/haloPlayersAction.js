import axios from 'axios';
import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
export const FETCHING_INFO_HALO_PLAYER = "FETCHING_INFO_HALO_PLAYER"
export const FETCHING_FAIL_HALO_PLAYER = "FETCHING_FAIL_HALO_PLAYER"
export const FETCHING_INFO_HALO_SUCESS_PLAYER = 'FETCHING_INFO_HALO_SUCESSPLAYER'



export const getHaloPlayerA = () => dispatch => {

    // const [data, setData] = useState([]);
    // const [query, setQuery] = useState("");

    const players = [
            'Xtianumbra',
            'Etherblades89',
    ]
       

        dispatch({type: FETCHING_INFO_HALO_PLAYER});
         axiosWithAuth()
            //.get (`stats/h5/servicerecords/arena?players=Xtianumbra`) 
        .get (`stats/h5/servicerecords/arena?players=${players}`) 
        //{players}[&seasonId]
        .then(res => {
            dispatch({type: FETCHING_INFO_HALO_SUCESS_PLAYER, payload: res.data.Results})
           console.log(res.data.Results,'Haloplayers action')
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: FETCHING_FAIL_HALO_PLAYER ,
                payload: err.response
            });
        });

}    




