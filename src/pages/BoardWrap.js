/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Board from '../orginisms/Board';
import './BoardWrap.css';

const BoardWrap = ({ getValue, inputBoard, changeInput }) => {
  const date = new Date();
  const [boards, setBoards] = useState([]);
  const [todos, setTodos] = useState([]);

  const addBoard = () => {
    if (inputBoard.trim() === '') return;
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
  const addTodo = (e, parent, init) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: date.getTime(),
          content: e.target.value,
          parent,
        },
      ]);
      init();
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
          const todoContent = todos.filter((todo) => todo.parent === board.id);
          return (
            <Board
              key={board.id}
              todoContent={todoContent}
              board={board}
              addTodo={addTodo}
              deleteBoard={deleteBoard}
            />
          );
        })}
      </ul>
    </>
  );
};

export default BoardWrap;
