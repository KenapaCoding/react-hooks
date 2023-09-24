import React, { useState, useReducer } from 'react';
import { reducer } from '../reducer/reducer';
import { ACTION } from '../reducer/actionType';
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: ACTION.INCREMENT, payload: 20 });
  };
  const handleDecrement = () => {
    dispatch({ type: ACTION.DECREMENT });
  };
  return (
    <div className="container">
      <div className="hooks">useReducer</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{state.count}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseReducer;
