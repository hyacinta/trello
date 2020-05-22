/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Boards = ({ deleteBoard, addTodo, board, todoContent }) => {
  const [todoInputState, setTodoInputState] = useState('');

  const changeTotodoInput = (e) => {
    setTodoInputState(e.target.value);
  };

  const initTodoInput = () => {
    setTodoInputState('');
  };

  return (
    <li className="board" key={board.id}>
      <h2>{board.title}</h2>
      <button
        type="button"
        className="btnDelete"
        onClick={() => deleteBoard(board.id)}
      >
        삭제
      </button>
      <ul className="todoList">
        {todoContent.map((todo) => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
      <input
        type="text"
        id="inputTodo"
        name="test"
        placeholder="할일을 입력하세요"
        value={todoInputState}
        onChange={changeTotodoInput}
        onKeyPress={(e) => addTodo(e, board.id, initTodoInput)}
      />
    </li>
  );
};

export default Boards;
