import react from 'react';
//styling and Animation 
import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux 
import { useSelector } from 'react-redux';

const GameDetail = () => {
    //data
    const {screen, game} = useSelector((state) => state.detail);
    return(
        <div className="card-shadow">
            <div className="detail">
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <div className="info">
                        <h3> Platform</h3>
                        <div className="platforms">
                           {game.platforms && game.platforms.map((data) => (
                               <h3 key={data.platform.id}>{data.platform.name}</h3>
                           ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt="imagee"/>
                </div>
                <div className="description">{game.description_raw}</div>
                <div className="gallery">
                    {screen.results && screen.results.map(screen => (
                        <img src={screen.image} key={screen.id} alt="game"/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameDetail;