import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction'

function App() {
  const dispatch = useDispatch();
  //loadgames is the action 
  useEffect(() => {
    dispatch(loadGames())
  });

  return (
    <div className="App">
      <h1>Rapid Games</h1>
    </div>
  );
}

export default App;
