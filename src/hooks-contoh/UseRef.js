import React from 'react';
import { useState, useRef } from 'react';

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef  = useRef(0)
 
  const handleIncrement = () => {
    setCount((count) => count + 1);
    countRef.current ++

    console.log("state : ", count)
    console.log("useRef : ", countRef.current)
    

  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div className="container">
      <div className="hooks">useRef</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{countRef.current}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseRef;
