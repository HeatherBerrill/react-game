import '../styles/Player.css';
import '../styles/index.css';
import { useEffect } from 'react';
import deleteBtn from '../images/delete-btn-1.png';

const Player2 = ({ fighter2, player2, setPlayer2 }) => {
  useEffect(() => {
    setPlayer2({ ...player2, fighter: fighter2 });
  }, [fighter2]);

  const clearPoints = () => {
    setPlayer2({ ...player2, points: 0 });
  };

  return (
    <div className='player-card'>
      <h2 className='player-points'> Points: {player2.points} </h2>
      <img
        src={deleteBtn}
        alt='clear points'
        className='player-btn btn'
        onClick={clearPoints}
      ></img>
    </div>
  );
};

export default Player2;
