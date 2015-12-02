import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import Header from './components/header.js';

ReactDOM.render((
  <Router>
    <Route path='/' component={Header}>

    </Route>
  </Router>
), document.getElementById('app'))
