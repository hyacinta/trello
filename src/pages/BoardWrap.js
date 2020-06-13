/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useMemo, useReducer } from 'react';
import Board from '../orginisms/Board';
import './BoardWrap.css';

const BoardWrap = ({ inputTodo, inputBoard, changeInput }) => {
  const date = new Date();

  function boardsReducer(state, action) {
    switch (action.type) {
      case 'ADD_BOARD':
        return [
          ...state,
          {
            id: date.getTime(),
            title: inputBoard,
          },
        ];
      case 'DELETE_BOARD':
        return state.filter((board) => board.id !== action.id);
      default:
        return state;
    }
  }
  const [boards, boardDispatch] = useReducer(boardsReducer, []);

  function todosReducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: date.getTime(),
          },
        ];
      case 'DELETE_TODO':
        return state.filter((todo) => todo.parent !== action.id);
      default:
        return state;
    }
  }
  const [todos, todosDispatch] = useReducer(todosReducer, []);

  const addBoard = () => {
    if (inputBoard.trim() === '') return;
    boardDispatch({
      type: 'ADD_BOARD',
      title: inputBoard,
    });
  };
  const enterAddBoard = (e) => {
    if (e.key === 'Enter') {
      addBoard();
    }
  };
  const addTodo = (e, parent) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      todosDispatch({
        type: 'ADD_TODO',
        content: e.target.value,
        parent,
      });
    }
  };

  const deleteBoard = (id) => {
    todosDispatch({
      type: 'DELETE_TODO',
      id,
    });
    boardDispatch({
      type: 'DELETE_BOARD',
      id,
    });
  };

  const boardsLength = (boards) => {
    return boards.length;
  };
  const counter = useMemo(() => boardsLength(boards), [boards]);
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
      <div className="totalCounter">TOTAL : {counter}</div>
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
              inputTodo={inputTodo}
              changeInput={changeInput}
            />
          );
        })}
      </ul>
    </>
  );
};

export default BoardWrap;
