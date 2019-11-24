import {FETCHING_INFO_HALO, FETCHING_FAIL_HALO, FETCHING_INFO_HALO_SUCESS} from '../actions/haloAction';
import {FETCHING_INFO_HALO_PLAYER,FETCHING_FAIL_HALO_PLAYER,FETCHING_INFO_HALO_SUCESS_PLAYER} from '../actions/haloPlayersAction';
import {FETCHING_INFO_HALO_MAP, FETCHING_FAIL_HALO_MAP, FETCHING_INFO_HALO_SUCESS_MAP} from '../actions/haloMapAction';
import {FETCHING_INFO_HALO_MEDAL, FETCHING_FAIL_HALO_MEDAL, FETCHING_INFO_HALO_SUCESS_MEDAL} from '../actions/haloMedalAction';

const initialState = {
    halodataM:[],
    halodata: [],
    halodataP: [],
    halodataMedal:[],
    message: null,
    isFetching: false,
    error: '',
};



export const haloReducer = (state = initialState, action) => {
switch (action.type) {

    case FETCHING_INFO_HALO:
        return {
            ...state,
            // halodata: [],
            isFetching: true, 
            error: ''
        };

        case FETCHING_INFO_HALO_SUCESS:
        return {
            ...state,
            halodata: action.payload,
            isFetching: false, 
            error: ''
        };

        case FETCHING_FAIL_HALO:
                return {
                    ...state,
                    // halodata: [],
                    //isFetching: false, 
                    error: action.payload
                };
                
        ///////////////////////   
          
        case FETCHING_INFO_HALO_PLAYER:
                return {
                    ...state,
                    isFetching: true, 
                    error: ''
                };

        case FETCHING_INFO_HALO_SUCESS_PLAYER:
                return {
                    ...state,
                    
                    halodataP: action.payload,
                    isFetching: false, 
                    error: ''
                };    

        case FETCHING_FAIL_HALO_PLAYER:
                return {
                    ...state,
                    error: action.payload
                };         
////////////////////////////////////3333333333
        case FETCHING_INFO_HALO_MAP:
                return {
                    ...state,
                    isFetching: true, 
                    error: ''
                };

        case FETCHING_INFO_HALO_SUCESS_MAP:
                return {
                    ...state,
                    halodataM: action.payload,
                    isFetching: false, 
                    error: ''
                };  

        case FETCHING_FAIL_HALO_MAP:
                return {
                    ...state,
                    error: action.payload
                };    

////////////////////////////////////////////////////
        case FETCHING_INFO_HALO_MEDAL:
                return {
                    ...state,
                    isFetching: true, 
                    error: ''
                };

        case FETCHING_INFO_HALO_SUCESS_MEDAL:
                return {
                    ...state,
                    halodataMedal: action.payload,
                    isFetching: false, 
                    error: ''
                };  

        case FETCHING_FAIL_HALO_MEDAL:
                return {
                    ...state,
                    error: action.payload
                };    


        default:
            return state;
  }
 };