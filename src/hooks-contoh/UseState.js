import React, {useState} from 'react';

const UseState = () => {
  function initialState () {
    console.log("running")
    return 0
  }
 const [state, setState] = useState({count:0, name:"ranggo"})
 const {count, name} = state
 const handleIncrement = () => {
  // setCount(count => count+1)
  setState(previousState => {
    return {...previousState, count: previousState.count +1 }
  })
 }
 const handleDecrement = () => {
  // setCount(count => count - 1)
 }
  return (
    <div className="container">
      <div className="hooks">useState</div>
      <div className="content">
        <button onClick={handleDecrement}>decrement</button>
        <div>{count}</div>
        <div>{name}</div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default UseState;
