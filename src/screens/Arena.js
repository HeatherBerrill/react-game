import '../styles/Arena.css';

import Player from '../components/Player';

import { Link } from 'react-router-dom';

const Arena = ({ arena }) => {
  return (
    <section className={`${arena} arena-page`}>
      <h1 className='arena-page__title'> {arena}</h1>
      <Player className='player-1__arena' />
      <Player className='player-2__arena' />
      <Link to='/home'>
        <button className='home-page__btn'> End Fight </button>
      </Link>
    </section>
  );
};

export default Arena;
