import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import About from 'components/page/About.js';
import Home from 'components/page/Home.js';
import NavBar from 'components/ui/NavBar.js';
import { ABOUT, HOME } from 'constants/links.js';

/** Renders all components in the <root> element on the page. */
class Root extends Component {
  render = () => (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ABOUT} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Root;
