import '../styles/Player.css';
import '../styles/index.css';
import Fighter from './Fighter';

const Player = () => {
  return (
    <div className='player-card'>
      <h1 className='player-title'> Player </h1>
      <h2 className='player-points'> points </h2>
      <Fighter className='player-fighter' />
    </div>
  );
};

export default Player;
