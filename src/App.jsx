import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Games from './components/Games/List.jsx';
import Game from './components/Games/Item.jsx';
import Navbar from './components/Navbar/Nav.jsx';
import Makers from './components/Makers/List.jsx';
import Maker from './components/Makers/Item.jsx';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path={['/games', '/']} component={Games} />
      <Route exact path='/games/:id' component={Game} />
      <Route exact path='/makers' component={Makers} />
      <Route exact path='/makers/:id' component={Maker} />
    </Switch>
  </Router>
);

export default App;
