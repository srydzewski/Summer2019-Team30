import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import NavBar from 'components/ui/NavBar.js';
import Home from 'components/page/Home.js';
import About from 'components/page/About.js';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
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
