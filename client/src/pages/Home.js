import React, { useEffect } from 'react';
//redex
import { useDispatch } from 'react-redux';
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
  dispatch(loadGames())
});
    return(
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;