import '../styles/Home.css';
import '../styles/index.css';
import Player from '../components/Player';

import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Home = ({ arena, setArena }) => {
  console.log(arena, 'arena in home');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('in handle submit');
  //   setArena(event.target.value);
  //   console.log(arena, 'arena in submit');
  // };

  return (
    <div className='home-page'>
      <h2 className='home-page__title'> Choose Fighters</h2>
      <Player />
      <Player />
      <h2> Choose Arena </h2>
      <form>
        <select
          onChange={(event) => {
            setArena(event.target.value);
          }}
        >
          <option disabled defaultValue value=''>
            Select One
          </option>
          <option value='potting-shed'> Potting Bench </option>
          <option value='tesco-carpark'> Tesco Carpark </option>
        </select>

        <Link to='/arena'>
          <button type='submit' className='home-page__btn'>
            {' '}
            Fight{' '}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
