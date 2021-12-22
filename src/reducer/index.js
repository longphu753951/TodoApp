import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const allReducers = combineReducers({
    taskReducer
});

export default allReducers;