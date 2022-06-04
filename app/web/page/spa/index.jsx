import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login';
import About from './about';


export default class AppRoute extends Component {
  state = {
    prefix: this.props.prefix
  };

  render() {
    const {prefix} = this.props
    return (
      <BrowserRouter location={ '/' }>
        <Switch>
          <Route exact path={'/spa/login'} component={Login}/>
          <Route exact path={'/spa/about'} component={About}/>
        </Switch>
      </BrowserRouter>
    );
  }
}