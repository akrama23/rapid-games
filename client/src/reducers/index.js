import {combineReducers} from 'redux';
import gamesReducer from './gamesReducer'

const rootReducer = conbineReducers({
    games: gamesReducer
});