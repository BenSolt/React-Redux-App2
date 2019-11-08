import {FETCHING_INFO_HALO, FETCHING_FAIL_HALO, FETCHING_INFO_HALO_SUCESS} from '../actions/haloAction';

const initialState = {
    halodata: [],
    message: null,
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
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

        default:
            return state;
  }
 };