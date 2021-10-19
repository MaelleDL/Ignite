import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

const Home = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  return (
    <div className="Home">
      <h1>Hello Home</h1>
    </div>
  );
};

export default Home;