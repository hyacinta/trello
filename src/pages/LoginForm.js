/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import './LoginForm.css';

const LoginForm = ({ clickLogin, changeInput }) => {
  return (
    <form className="loginForm">
      <ul>
        <li>
          <label htmlFor="inputId" className="inputLabel">
            ID
          </label>
          <input
            type="text"
            id="inputId"
            placeholder="아이디를 입력하세요"
            onChange={changeInput}
          />
        </li>
        <li>
          <label htmlFor="inputPw" className="inputLabel">
            PASSWORD
          </label>
          <input
            type="text"
            id="inputPw"
            placeholder="비밀번호를 입력하세요"
            onChange={changeInput}
          />
        </li>
      </ul>
      <button type="button" className="btnLogin" onClick={clickLogin}>
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
