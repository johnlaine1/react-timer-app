import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import TimerPage from './components/TimerPage';
import CountdownPage from './components/CountdownPage';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TimerPage}/>
      <Route path="countdown" component={CountdownPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);

