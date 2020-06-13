/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './templates/Header';
import Main from './templates/Main';

const App = () => {
  // user 데이터
  const [users, setUsers] = useState([
    {
      id: 0,
      userId: '1',
      userPw: '1',
    },
  ]);
  // input 데이터 초기값
  const [inputs, setInputs] = useState({
    inputId: '',
    inputPw: '',
    inputBoard: '',
    inputTodo: '',
  });
  const { inputId, inputPw, inputBoard, inputTodo } = inputs;

  // 로그인 초기값
  const [login, setLogin] = useState({
    isLogin: true,
    loginId: '',
  });
  const { isLogin, loginId } = login;

  // input 값 받아오기
  const getValue = (id, value) => {
    setInputs({
      ...inputs,
      [id]: value,
    });
  };
  const changeInput = (e) => {
    const { id, value } = e.target;
    getValue(id, value);
  };
  // 로그인 성공 데이터 변경
  const successLogin = (Id) => {
    setLogin({
      isLogin: true,
      loginId: Id,
    });
  };

  // 로그인 버튼 클릭
  const clickLogin = () => {
    users.map((user) => {
      user.userId === inputId && user.userPw === inputPw
        ? successLogin(user.userId)
        : alert('로그인 실패');
    });
  };

  // 로그아웃 버튼 클릭
  const clickLogout = () => {
    setLogin({
      isLogin: false,
      loginId: '',
    });
  };
  // useEffect
  useEffect(() => {
    login.isLogin ? alert('로그인 성공') : '';
    console.log('컴포넌트가 그려짐');
    console.log(login);
    return () => {
      console.log('컴포넌트가 사라짐');
    };
  }, [login]);

  return (
    <div className="wrap">
      <Header isLogin={isLogin} clickLogout={clickLogout} loginId={loginId} />
      <Main
        isLogin={isLogin}
        getValue={getValue}
        clickLogin={clickLogin}
        inputBoard={inputBoard}
        inputTodo={inputTodo}
        changeInput={changeInput}
      />
    </div>
  );
};

export default App;
