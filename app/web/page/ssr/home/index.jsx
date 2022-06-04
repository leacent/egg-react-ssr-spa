import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import request from 'framework/request'
import Logo from 'asset/images/react.png';

import './index.less'

// 服务的渲染
const HomePage = (props) => {
  const [name, setName] = useState('');
  const getUserInfo =  async () => {
    request.get(`/api/getUserInfo?id=${Math.random()*912831823}`).then(res => {
      setName(res.name + '-' + res.userId)
    })
  }
  return <div style={{'textAlign': 'center'}}>
    {/* 登录页面不在服务端渲染的路由当中，即不可用Link跳转 */}
    <img src={Logo}  />
    <hr />
    <a href="/spa/login">登录页面</a><hr />
    用户名: {name}
    <div>
      <a href="/spa/about">关于我们</a>
      <hr />
      <Button type='primary' onClick={getUserInfo}>获取用户信息</Button>
    </div>
    <Button type='primary' onClick={() => setName('')}>置空</Button>
  </div>
}
export default HomePage
