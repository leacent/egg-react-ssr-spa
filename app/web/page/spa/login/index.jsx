import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import request from 'framework/request';
import './index.css';

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }
  getData() {
    request.get('/V2/api/getData').then(res=> {
      console.log('测试跨域',res.data);
    })
  }
  render() {
    return <div>
      <div className="login">
        <Button onClick={() => this.getData()}>获取跨域数据</Button>
        <div>
          <Link to="/spa/about">关于我们</Link>
          <h1>Welcome <a href="/">easy-react-admin</a>!</h1>
        </div>
      </div>
    </div>;
  }
}