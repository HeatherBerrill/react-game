import '../styles/Player1.css';
import '../styles/index.css';
import Fighter from './Fighter';

const Player1 = () => {
  return (
    <div className='player-card'>
      <h1> Player1 </h1>
      <h2> points </h2>
      <Fighter />
    </div>
  );
};

export default Player1;
