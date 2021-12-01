import '../styles/Player.css';
import '../styles/index.css';
import { useEffect } from 'react';
import deleteBtn from '../images/delete-btn-1.png';
const Player1 = ({ fighter1, player1, setPlayer1 }) => {
  useEffect(() => {
    setPlayer1({ ...player1, fighter: fighter1 });
  }, [fighter1]);

  const clearPoints = () => {
    setPlayer1({ ...player1, points: 0 });
  };

  return (
    <div className='player-card'>
      <h2 className='player-points'> Points: {player1.points} </h2>
      <img
        src={deleteBtn}
        alt='clear points'
        className='player-btn btn'
        onClick={clearPoints}
      ></img>
    </div>
  );
};

export default Player1;
