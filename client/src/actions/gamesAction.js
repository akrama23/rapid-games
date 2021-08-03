import axios from 'axios';
import {popularGamesURL} from '../api';

//ACTION CREATOR


export const loadGames = () => async (dispatch) =>{
    //FETCH AXIOS
    //need await with all async data
    const popularData = await axios.get(popularGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results
        }
    });

};