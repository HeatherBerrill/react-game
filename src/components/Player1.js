import '../styles/Player.css';
import '../styles/index.css';
import { useEffect } from 'react';

const Player1 = ({ fighter1, player1, setPlayer1 }) => {
  useEffect(() => {
    setPlayer1({ ...player1, fighter: fighter1 });
  }, [fighter1]);

  return (
    <div className='player-card'>
      <h1 className='player-title'> Player1 </h1>
      <h2 className='player-points'> Points: {player1.points} </h2>
      <button
        className='player-btn btn'
        disabled={player1.points === 0 ? true : false}
      >
        {' '}
        Reset Points
      </button>
    </div>
  );
};

export default Player1;
