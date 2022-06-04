import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import HtmlLayout from 'component/layout'
import Route from './routes';
import { create } from '../../store';

import './entry.less'

export default class Admin extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  onEnter = () => {
    console.log('this.props.ctx', this.props.ctx);

    console.log('>>test');
  }


  render() {
    if (EASY_ENV_IS_NODE) {
      const store = create(this.props);
      const { prefix, url } = store.getState();
      return (
        <HtmlLayout>
          <Provider store={ store }>
            <StaticRouter location={ url }>
              <Route prefix = {prefix} />
            </StaticRouter>
          </Provider>
        </HtmlLayout>
      );
    }
    const store = create(window.__INITIAL_STATE__);
    const { prefix, url, ctx, title } = store.getState();
    console.log('>>client prefix', prefix, url);
    return (
      <Provider store={ store }>
        <BrowserRouter location={ url }>
          <Route title={title} prefix = {prefix} ctx= {ctx} url={ url }  />
        </BrowserRouter>
      </Provider>
    );
  }
}