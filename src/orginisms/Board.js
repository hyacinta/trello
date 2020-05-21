/* eslint-disable react/prop-types */
import React from 'react';

const Board = ({
  deleteBoard,
  inputTodo,
  changeInput,
  addTodo,
  board,
  todos,
}) => {
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
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
      <input
        type="text"
        id="inputTodo"
        placeholder="할일을 입력하세요"
        value={inputTodo}
        onChange={changeInput}
        onKeyPress={(e) => addTodo(e, board.id)}
      />
    </li>
  );
};

export default Board;
