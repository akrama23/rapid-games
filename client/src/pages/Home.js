import React, { useEffect } from 'react';

//redex
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction'

//components
import Game from '../components/Game'

//styling and Animation 
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Home = () =>  {
    //FETCH GAMES
const dispatch = useDispatch();
//loadgames is the action 
useEffect(() => {
  dispatch(loadGames());
},[dispatch]);
//Get data back from the state by using useSelector 
//extract specific items from state.games
    const { popular, newGames, upcoming } = useSelector((state) => state.games);
    
    return(
        <GameList>
            <h1>Home</h1>
        </GameList>
    );
};

const GameList = styled(motion.div)`

`

export default Home;