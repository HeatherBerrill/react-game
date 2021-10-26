import '../styles/Arena.css';
import '../styles/index.css';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import { Link } from 'react-router-dom';

const Arena = () => {
  return (
    <div className='arena-page'>
      <h1 className='arena-page__title'> Arena</h1>
      <Player1 />
      <Player2 />
      <Link to='/home'>
        <button className='home-page__btn'> End Fight </button>
      </Link>
    </div>
  );
};

export default Arena;
