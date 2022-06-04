import React from 'react';
import { Link } from 'react-router-dom';


const AboutPage = (props) => {
  return <div>
    <a href="/home">去首页</a>
    <hr />
    <Link to="/spa/login">去登录页</Link>
    About  page 123123 ss
  </div>
}
export default AboutPage