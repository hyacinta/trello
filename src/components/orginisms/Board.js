import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const Board = () => {
  return (
    <li className="board">
      <h3>내일 식단</h3>
      <Button className="btnDelete" title="지우기" />
      <ul className="todoList">
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
      <Input id="inputNewMenu" type="text" placeholder="식단을 입력하세요" />
    </li>
  );
};

export default Board;
