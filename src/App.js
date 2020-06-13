/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Header from './templates/Header';
import Main from './templates/Main';

const App = () => {
  // user 데이터
  const users = [
    {
      id: 0,
      userId: '1',
      userPw: '1',
    },
  ];

  // 로그인 reducer
  function loginReducer(state, action) {
    switch (action.type) {
      case 'SUCCESS_LOGIN':
        return {
          ...state,
          isLogin: true,
          loginId: action.id,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLogin: false,
          loginId: '',
        };
      default:
        return state;
    }
  }
  // 로그인 initial state
  const [login, loginDispatch] = useReducer(loginReducer, {
    isLogin: true,
    loginId: '',
  });
  const { isLogin, loginId } = login;

  // inputs reducer
  function inputsReducer(state, action) {
    switch (action.type) {
      case 'GET_VALUE':
        return {
          ...state,
          [action.id]: action.value,
        };
      default:
        return state;
    }
  }

  // inputs initial state
  const [inputs, inputsDispatch] = useReducer(inputsReducer, {
    inputId: '',
    inputPw: '',
    inputBoard: '',
    inputTodo: '',
  });
  const { inputId, inputPw, inputBoard, inputTodo } = inputs;

  const changeInput = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    inputsDispatch({
      type: 'GET_VALUE',
      id,
      value,
    });
  };

  // 로그인 버튼 클릭
  const clickLogin = () => {
    users.map((user) => {
      user.userId === inputId && user.userPw === inputPw
        ? loginDispatch({
            type: 'SUCCESS_LOGIN',
            id: user.userId,
          })
        : alert('로그인 실패');
    });
  };

  // 로그아웃 버튼 클릭
  const clickLogout = () => {
    loginDispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <div className="wrap">
      <Header isLogin={isLogin} loginId={loginId} clickLogout={clickLogout} />
      <Main
        isLogin={isLogin}
        clickLogin={clickLogin}
        inputBoard={inputBoard}
        inputTodo={inputTodo}
        changeInput={changeInput}
      />
    </div>
  );
};

export default App;
