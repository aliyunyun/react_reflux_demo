import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Home from "./components/Home";

import {Router, Route, hashHistory} from 'react-router';

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));


//Router
ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Route>
  </Router>),
  document.getElementById('app'));
