import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavigationBar';
import Home from './pages/Home';
import Detail from './pages/Detail';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/detail' component={Detail} />
          </Switch>
        </Router>
      </>
    );
  }
}
