import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import MovieDetails from './MovieDetails';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:movie" component={MovieDetails} />
    </div>
  </Router>
);

export default App;
