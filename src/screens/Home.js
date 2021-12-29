import '../styles/Home.css';
import '../styles/index.css';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Fighter1 from '../components/Fighter1';
import Fighter2 from '../components/Fighter2';
import Frame from '../components/Frame';
const Home = ({
  setArena,
  fighter1,
  setFighter1,
  fighter2,
  setFighter2,
  player1,
  setPlayer1,
  player2,
  setPlayer2
}) => {
  const history = useHistory();

  const handleChoice = (arenaChoice) => {
    if (fighter1 && fighter2) {
      setArena(arenaChoice);
      history.push('/arena');
    }
  };

  return (
    <div className='background_home'>
      <main className='home-page'>
        <section className='choose-fighters'>
          <Player1
            className='player-1'
            player1={player1}
            setPlayer1={setPlayer1}
            fighter1={fighter1}
            setFighter1={setFighter1}
          />
          <Frame className='player1-frame'>
            <Fighter1
              className='player-fighter1'
              fighter1={fighter1}
              setFighter1={setFighter1}
            />
          </Frame>
          <Frame className='player2-frame'>
            <Fighter2
              className='player-fighter2'
              fighter2={fighter2}
              setFighter2={setFighter2}
              setPlayer2={setPlayer2}
              player2={player2}
            />
          </Frame>
        </section>
        <section className='choose-arena'>
          <div
            disabled={!fighter1 || !fighter2 ? true : false}
            className='potting-shed-choice'
            onClick={() => {
              handleChoice('potting-shed');
            }}
          ></div>
          <div
            disabled={!fighter1 || !fighter2 ? true : false}
            className='tesco-carpark-choice'
            onClick={() => {
              handleChoice('tesco-carpark');
            }}
          ></div>

          <div
            className='arena-3-choice'
            disabled={true}
            onClick={() => {
              handleChoice('arena-3');
            }}
          ></div>

          <div
            className='arena-4-choice'
            disabled={true}
            onClick={() => {
              handleChoice('arena-4');
            }}
          ></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
