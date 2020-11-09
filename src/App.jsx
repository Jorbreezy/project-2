import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './style.css';

import Games from './components/Games/List.jsx';
import Game from './components/Games/Item.jsx';
import Navbar from './components/Navbar/Nav.jsx';
import Makers from './components/Makers/List.jsx';
import Maker from './components/Makers/Item.jsx';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path={['/games', '/']} component={Games} />
      <Route exact path='/games/:id' component={Game} />
      <Route exact path='/makers' component={Makers} />
      <Route exact path='/makers/:id' component={Maker} />
    </Switch>
  </>
);

export default App;
