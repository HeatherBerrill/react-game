import '../styles/Home.css';
import '../styles/index.css';
import Player from '../components/Player';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Home = ({ setArena, fighter, setFighter }) => {
  const history = useHistory();
  const [chosenArena, setChosenArena] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setArena(chosenArena);
    setChosenArena('');
    history.push('/arena');
  };

  return (
    <div className='home-page'>
      <h2 className='home-page__title'> Choose Fighters</h2>
      <Player className='player-1' fighter={fighter} setFighter={setFighter} />
      <Player className='player-2' fighter={fighter} setFighter={setFighter} />
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
        <button type='submit' className='home-page__btn btn'></button>
      </form>
    </div>
  );
};

export default Home;
