import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Home from '../page/Home';
import About from '../page/About';
import { getLoginStatus } from '../../fetchers/login';

class Root extends Component {
  render() {
    getLoginStatus();
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
