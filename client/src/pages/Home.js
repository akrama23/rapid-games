import React, { useEffect } from 'react';
import GameDetail from '../components/GameDetail'

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
            <GameDetail/>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game => (
                    <Game 
                    key={game.id} 
                    id={game.id}
                    name={game.name} 
                    released={game.released}
                    image={game.background_image}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map(game => (
                    <Game 
                    key={game.id} 
                    id={game.id}
                    name={game.name} 
                    released={game.released}
                    image={game.background_image}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(game => (
                    <Game 
                    key={game.id} 
                    id={game.id}
                    name={game.name} 
                    released={game.released}
                    image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>

    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
   h2{
       padding: 5rem 0rem;
   }
`;

const Games = styled(motion.div)` 
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;

`;

export default Home;