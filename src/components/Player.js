import '../styles/Player.css';
import '../styles/index.css';
import Fighter from './Fighter';

const Player = ({ fighter, setFighter }) => {
  // const [player1, setPlayer1] = useState({fighter: '', points: 0});
  // const [player2, setPlayer2] = useState({fighter: '', points: 0})
  return (
    <div className='player-card'>
      <h1 className='player-title'> Player </h1>
      <h2 className='player-points'> points </h2>
      <Fighter
        className='player-fighter'
        fighter={fighter}
        setFighter={setFighter}
      />
    </div>
  );
};

export default Player;
