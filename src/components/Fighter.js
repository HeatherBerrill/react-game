import fighters from '../fighters';

const Fighter = () => {
  return (
    <div>
      <ul className='fighter__list'>
        {fighters.map((fighter) => {
          return (
            <li key={fighter.name}>
              <h3> {fighter.name} </h3>
              <img
                alt={fighter.name}
                className='fighter-list__thumbnail'
                src={fighter.image}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fighter;
