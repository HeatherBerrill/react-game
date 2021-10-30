import '../styles/Home.css';
import '../styles/index.css';
import Player from '../components/Player';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = ({ arena, setArena }) => {
  const [chosenArena, setChosenArena] = useState('');
  console.log(chosenArena, 'cho arena in home');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handle submit');
    setArena(chosenArena);
    setChosenArena('');
  };

  return (
    <div className='home-page'>
      <h2 className='home-page__title'> Choose Fighters</h2>
      <Player className='player-1' />
      <Player className='player-2' />
      <h2> Choose Arena </h2>

      <form className='arena-form' onSubmit={handleSubmit}>
        <select
          type='dropdown'
          value={chosenArena}
          onChange={(event) => {
            setChosenArena(event.target.value);
          }}
        >
          <option value='' defaultValue disabled>
            Select One
          </option>
          <option value='potting-shed'> Potting Shed </option>
          <option value='tesco-carpark'> Tesco Carpark </option>
        </select>

        <Link to='/arena'>
          <button type='submit' className='home-page__btn btn'></button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
