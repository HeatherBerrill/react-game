import '../styles/Player.css';
import '../styles/index.css';

const Player2 = ({ fighter, setFighter, player2 }) => {
  console.log(fighter, 'player2');
  console.log(player2, 'p2 state');
  return (
    <div className='player-card'>
      <h1 className='player-title'> Player2 </h1>
      <h2 className='player-points'> points </h2>
    </div>
  );
};

export default Player2;
