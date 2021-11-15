import '../styles/Landing.css';
import '../styles/index.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-page'>
      <h1 className='landing-page__title'> Bug Battle</h1>
      <Link to='/home'>
        <button className='landing-page__btn btn'> Start </button>
      </Link>
    </div>
  );
};

export default Landing;
