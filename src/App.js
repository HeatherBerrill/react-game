import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Arena from './screens/Arena';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/arena'>
          <Arena />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
