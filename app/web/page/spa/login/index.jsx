import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <div>
      <div className="login">
        <div>
          <Link to="/spa/about">关于我们</Link>
          <h1>Welcome <a href="/">easy-react-admin</a>!</h1>
        </div>
      </div>
    </div>;
  }
}