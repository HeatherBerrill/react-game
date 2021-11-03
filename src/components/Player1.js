import '../styles/Player.css';
import '../styles/index.css';

const Player1 = ({ fighter, setFighter, player1 }) => {
  console.log(fighter, 'player1');
  console.log(player1, 'p1 state');
  return (
    <div className='player-card'>
      <h1 className='player-title'> Player1 </h1>
      <h2 className='player-points'> points </h2>
    </div>
  );
};

export default Player1;
