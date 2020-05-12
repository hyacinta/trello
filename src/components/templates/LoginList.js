/* eslint-disable react/prop-types */
import React from 'react';
import LoginId from '../molecules/LoginId';
import LoginPw from '../molecules/LoginPw';

const LoginList = ({ inputChange }) => (
  <ul>
    <li>
      <LoginId inputChange={inputChange} />
    </li>
    <li>
      <LoginPw inputChange={inputChange} />
    </li>
  </ul>
);
export default LoginList;
