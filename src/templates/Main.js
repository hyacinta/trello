/* eslint-disable react/prop-types */
import React from 'react';
import LoginForm from '../pages/LoginForm';
import BoardWrap from '../pages/BoardWrap';

const Main = ({ isLogin, clickLogin, inputBoard, inputTodo, changeInput }) => {
  return (
    <main>
      {isLogin ? (
        <BoardWrap
          inputBoard={inputBoard}
          inputTodo={inputTodo}
          changeInput={changeInput}
        />
      ) : (
        <LoginForm clickLogin={clickLogin} changeInput={changeInput} />
      )}
    </main>
  );
};

export default Main;
