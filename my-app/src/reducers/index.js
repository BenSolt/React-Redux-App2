import {FETCHING_INFO, FETCHING_FAIL} from '../actions/dogAction';

const initialState = {
    message: null,
    isFetching: false,
    error:''
}

export const reducer = (state = initialState, action) => {
switch (action.type) {

    case FETCHING_INFO:
        return {
            ...state,
            message: action.payload,
            isFetching: false, // <-- suppose to be true?
            error: ''
        };

    case FETCHING_FAIL:
        return {
            ...state,
            isFetching: false, // <-- suppose to be true?
            error: ''
        };
        default:
            return state;
  }
 };