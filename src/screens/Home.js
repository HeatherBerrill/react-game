import '../styles/Home.css';
import '../styles/index.css';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Home = ({ arena, setArena }) => {
  const handleSubmit = (event) => {
    console.log('in handle submit');
    event.preventDefault();
    setArena(event.target.value);
    console.log(arena, 'arena in submit');
  };

  return (
    <div className='home-page'>
      <h2 className='home-page__title'> Choose Fighters</h2>
      <Player1 />
      <Player2 />
      <h2> Choose Arena </h2>
      <form onSubmit={handleSubmit}>
        <select
        // onChange={(event) => {
        //   setArena(event.target.value);
        // }}
        >
          <option disabled defaultValue value=''>
            Select One
          </option>
          <option value='potting-bench'> Potting Bench </option>
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
