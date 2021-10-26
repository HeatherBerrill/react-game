import '../styles/Home.css';
import '../styles/index.css';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
      <h2 className='home-page__title'> Choose Fighters</h2>
      <Player1 />
      <Player2 />
      <h2> Choose Arena </h2>
      <form>
        <select>
          <option disabled defaultValue value=''>
            Select One
          </option>
          <option value='Potting Bench'> Potting Bench </option>
          <option value='Tesco Carpark'> Tesco Carpark </option>
        </select>
      </form>

      <Link to='/arena'>
        <button className='home-page__btn'> Fight </button>
      </Link>
    </div>
  );
};

export default Home;
