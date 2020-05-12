import React from 'react';
import Input from '../atoms/Input';

const MakeTodos = () => {
  return (
    <div className="MakeTodos">
      <h2>New Board</h2>
      <Input
        id="inputNewBoard"
        type="text"
        placeholder="새로운 보드를 만드세요"
      />
    </div>
  );
};

export default MakeTodos;
