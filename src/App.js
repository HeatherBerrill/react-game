import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Arena from './screens/Arena';

function App() {
  const [arena, setArena] = useState('');
  const [fighter, setFighter] = useState('');
  const [player1, setPlayer1] = useState({ fighter: '', points: 0 });
  const [player2, setPlayer2] = useState({ fighter: '', points: 0 });
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/home'>
          <Home
            arena={arena}
            setArena={setArena}
            fighter={fighter}
            setFighter={setFighter}
            player1={player1}
            setPlayer1={setPlayer1}
            player2={player2}
            setPlayer2={setPlayer2}
          />
        </Route>
        <Route exact path='/arena'>
          <Arena
            arena={arena}
            setArena={setArena}
            player1={player1}
            setPlayer1={setPlayer1}
            player2={player2}
            setPlayer2={setPlayer2}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
