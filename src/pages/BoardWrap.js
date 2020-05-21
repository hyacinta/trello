/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './BoardWrap.css';

const Board = ({ getValue, inputBoard, inputTodo, changeInput }) => {
  const date = new Date();
  const [boards, setBoards] = useState([]);
  const [todos, setTodos] = useState([]);

  const addBoard = () => {
    setBoards([
      ...boards,
      {
        id: date.getTime(),
        title: inputBoard,
      },
    ]);

    getValue('inputBoard', '');
  };
  const enterAddBoard = (e) => {
    if (e.key === 'Enter') {
      addBoard();
    }
  };
  const addTodo = (e, parent) => {
    if (e.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: date.getTime(),
          content: inputTodo,
          parent,
        },
      ]);

      getValue('inputTodo', '');
    }
  };
  const deleteBoard = (id) => {
    setTodos(todos.filter((todo) => todo.parent !== id));
    setBoards(boards.filter((board) => board.id !== id));
  };
  return (
    <>
      <div className="makeBoard">
        <label htmlFor="addBoard">NEW BOARD</label>
        <input
          type="text"
          id="inputBoard"
          value={inputBoard}
          placeholder="제목을 입력하세요"
          onChange={changeInput}
          onKeyPress={enterAddBoard}
        />
        <button type="button" className="btnAddBoard" onClick={addBoard}>
          추가
        </button>
      </div>
      <ul className="boardList">
        {boards.map((board) => {
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
        })}
      </ul>
    </>
  );
};

export default Board;
