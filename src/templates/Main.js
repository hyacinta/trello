/* eslint-disable react/prop-types */
import React from 'react';
import LoginForm from '../pages/LoginForm';
import BoardWrap from '../pages/BoardWrap';

const Main = ({
  isLogin,
  getValue,
  clickLogin,
  inputBoard,
  inputTodo,
  changeInput,
}) => {
  return (
    <main>
      {isLogin ? (
        <BoardWrap
          getValue={getValue}
          inputBoard={inputBoard}
          inputTodo={inputTodo}
          changeInput={changeInput}
        />
      ) : (
        <LoginForm
          clickLogin={clickLogin}
          getValue={getValue}
          changeInput={changeInput}
        />
      )}
    </main>
  );
};

export default Main;
