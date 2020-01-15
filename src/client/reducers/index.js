import { combineReducers } from 'redux';
import getStateInfo from './gameReducer';

const rootReducer = combineReducers({
    gameArray: getStateInfo,
});

export default rootReducer;