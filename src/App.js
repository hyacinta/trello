/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Header from './components/templates/Header';
import LoginForm from './pages/LoginForm';
import TodosWrap from './pages/TodosWrap';

const App = () => {
  // 유저 아이디 데이터
  const [users, setUsers] = useState([
    {
      _id: 0,
      id: 'hyacinta',
      password: '1234',
    },
  ]);

  // input 데이터
  const [inputs, setInputs] = useState({
    inputId: '',
    inputPassword: '',
  });
  const { inputId, inputPassword } = inputs;

  // 로그인 초기상태
  const [loginState, setLoginstate] = useState({
    isLogin: false,
    loginId: '',
  });
  const { isLogin, loginId } = loginState;

  // input 값 받아오기
  const inputChange = (e) => {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  // 로그인 성공 데이터 변경
  const successLogin = (id) => {
    setLoginstate({
      isLogin: true,
      loginId: id,
    });
  };

  // 로그인 버튼 클릭
  const btnLogin = () => {
    users.map((user) =>
      user.id === inputId && user.password === inputPassword
        ? successLogin(user.id)
        : alert('로그인 실패'),
    );
  };

  // 로그아웃 데이터 변경
  const btnLogout = () => {
    setLoginstate({
      isLogin: false,
      loginId: '',
    });
  };

  return (
    <div className="wrap">
      <h1 className="a11yHidden">trello</h1>
      <Header isLogin={isLogin} loginId={loginId} btnLogout={btnLogout} />
      {isLogin ? (
        <TodosWrap />
      ) : (
        <LoginForm btnLogin={btnLogin} inputChange={inputChange} />
      )}
    </div>
  );
};

export default App;
