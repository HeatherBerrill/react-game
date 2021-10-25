import '../styles/Arena.css';
import '../styles/index.css';
import { Link } from 'react-router-dom';

const Arena = () => {
  return (
    <div className='arena-page'>
      <h1 className='arena-page__title'> Arena</h1>
      <Link to='/home'>
        <button className='home-page__btn'> End Fight </button>
      </Link>
    </div>
  );
};

export default Arena;
