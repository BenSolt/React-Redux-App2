import {combineReducers} from 'redux';
import haloReducer from './reducers/HaloReducer';
import dogReducer from './reducers/DogReducer';

const rootReducer = combineReducers({
    haloReducer,
    dogReducer
})
 export default rootReducer;