import React from 'react';

const Todos = ({ todo }) => {
  return (
    <div
      style={{
        backgroundColor: `${todo.completed ? 'green' : 'red'}`,
        margin: 10,
      }}>
      {todo.title}
    </div>
  );
};

export default Todos;
