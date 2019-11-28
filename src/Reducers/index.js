import { combineReducers } from 'redux';
import countReducer from './couter';


const reducers = combineReducers({
    countReducer,
});
export default reducers;