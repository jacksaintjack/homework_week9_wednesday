import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Home from './components/home';
import Artists from './components/artists';
import Login from './components/login';

ReactDOM.render((
<Router>
  <Route path="/" component={Home}>
    // <IndexRoute component={Artists} />
    <Route path='/login' component={Login} />
  </Route>
</Router>
), document.getElementById('app'));
