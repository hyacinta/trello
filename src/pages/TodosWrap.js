import React from 'react';
import MakeTodos from '../components/templates/MakeTodos';
import BoardList from '../components/templates/BoardList';

const TodosWrap = () => {
  return (
    <div className="todosWrap">
      <MakeTodos />
      <BoardList />
    </div>
  );
};

export default TodosWrap;
