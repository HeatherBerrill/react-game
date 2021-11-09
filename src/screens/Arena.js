import '../styles/Arena.css';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import fighters from '../fighters';
import { Link } from 'react-router-dom';
import { battle } from '../battle';
import { useEffect } from 'react';

const Arena = ({
  arena,
  player2,
  setPlayer1,
  player1,
  setPlayer2,
  setFighter1,
  setFighter2,
  fighter1,
  fighter2
}) => {
  const resetFighters = () => {
    setFighter1('');
    setFighter2('');
  };

  useEffect(() => {
    battle(player1, player2);
  }, [player1, player2]);

  return (
    <section data-testid='background' className={`${arena} arena-page`}>
      <h1 className='arena-page__title'> {arena}</h1>
      <Player1
        className='player-1__arena'
        player1={player1}
        setPlayer1={setPlayer1}
        fighter1={fighter1}
      />
      {fighters.map((singleFighter) => {
        return (
          <div className='fighter1-imagebox__arena'>
            {singleFighter.name === fighter1 && (
              <img
                className={'player-image'}
                value={singleFighter.name}
                alt={singleFighter.name}
                src={singleFighter.image}
              ></img>
            )}
          </div>
        );
      })}
      <Player2
        className='player-2__arena'
        player2={player2}
        setPlayer2={setPlayer2}
        fighter2={fighter2}
      />

      {fighters.map((singleFighter) => {
        return (
          <div className='fighter2-imagebox__arena'>
            {singleFighter.name === fighter2 && (
              <img
                className={'player-image'}
                value={singleFighter.name}
                alt={singleFighter.name}
                src={singleFighter.image}
              ></img>
            )}
          </div>
        );
      })}
      <Link to='/home'>
        <button className='arena-page__btn' onClick={resetFighters}>
          {' '}
          End Fight{' '}
        </button>
      </Link>
    </section>
  );
};

export default Arena;
