/* eslint-disable react/prop-types */
import React from 'react';
import LoginList from '../components/templates/LoginList';
import Button from '../components/atoms/Button';

const Login = ({ btnLogin, inputChange }) => {
  return (
    <form className="loginForm">
      <h2>로그인</h2>
      <LoginList inputChange={inputChange} />
      <Button className="btnLogin" title="LOGIN" btnClick={btnLogin} />
    </form>
  );
};

export default Login;
