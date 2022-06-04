import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Spa from '../../spa/index';


import Home from '../home';

export default class AppRoute extends Component {
  state = {
    prefix: this.props.prefix
  };

  render() {
    return (
      <Switch>
        <Route exact path={this.state.prefix} component={Home} />
        <Route exact path={this.state.prefix + '/spa'} component={Spa}/>
      </Switch>
    );
  }
}