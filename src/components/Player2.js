import '../styles/Player.css';
import '../styles/index.css';
import { useEffect } from 'react';

const Player2 = ({ fighter2, player2, setPlayer2 }) => {
  useEffect(() => {
    setPlayer2({ ...player2, fighter: fighter2 });
  }, [fighter2]);

  return (
    <div className='player-card'>
      <h1 className='player-title'> Player2 </h1>
      <h2 className='player-points'> {player2.points} </h2>
    </div>
  );
};

export default Player2;
