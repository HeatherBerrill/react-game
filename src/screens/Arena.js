import '../styles/Arena.css';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import { Link } from 'react-router-dom';

const Arena = ({ arena, player2, player1 }) => {
  return (
    <section data-testid='background' className={`${arena} arena-page`}>
      <h1 className='arena-page__title'> {arena}</h1>
      <Player1 className='player-1__arena' />
      {/* <img
        alt='fighter image'
        className='fighter-image'
        src={singleFighter.image}
      ></img> */}
      <Player2 className='player-2__arena' />
      <Link to='/home'>
        <button className='home-page__btn'> End Fight </button>
      </Link>
    </section>
  );
};

export default Arena;
