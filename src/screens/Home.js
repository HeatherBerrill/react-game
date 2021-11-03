import '../styles/Home.css';
import '../styles/index.css';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Fighter from '../components/Fighter';

const Home = ({
  setArena,
  fighter,
  setFighter,
  player1,
  setPlayer1,
  player2,
  setPlayer2
}) => {
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
      <Player1
        className='player-1'
        player1={player1}
        setPlayer1={setPlayer1}
        fighter={fighter}
        setFighter={setFighter}
      />
      <Fighter
        className='player-fighter1'
        fighter={fighter}
        setFighter={setFighter}
      />
      <Player2
        className='player-2'
        player2={player2}
        setPlayer2={setPlayer2}
        fighter={fighter}
        setFighter={setFighter}
      />
      <Fighter
        className='player-fighter2'
        fighter={fighter}
        setFighter={setFighter}
      />
      <h2 className='arena-title'> Choose Arena </h2>

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
        <button type='submit' className='home-page__btn btn'>
          {' '}
          Select
        </button>
      </form>
    </div>
  );
};

export default Home;
