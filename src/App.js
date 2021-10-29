import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Arena from './screens/Arena';

function App() {
  const [arena, setArena] = useState('');
  console.log(arena, 'in app');
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/home'>
          <Home arena={arena} setArena={setArena} />
        </Route>
        <Route exact path='/arena'>
          <Arena arena={arena} setArena={setArena} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
