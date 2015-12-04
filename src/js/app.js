import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Header from './components/header';
import Artists from './components/artists';

ReactDOM.render((
<Router>
  <Route path="/" component={Header}>
    <IndexRoute component={Artists} />
  </Route>
</Router>
), document.getElementById('app'));
