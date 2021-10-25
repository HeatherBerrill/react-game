import '../styles/Home.css';
import '../styles/index.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
      <h1 className='home-page__title'> Choose Things</h1>
      <Link to='/arena'>
        <button className='home-page__btn'> Fight </button>
      </Link>
    </div>
  );
};

export default Home;
