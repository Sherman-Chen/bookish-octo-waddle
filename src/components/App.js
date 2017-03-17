import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Details from './Details';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movie" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
