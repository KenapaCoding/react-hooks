import React, { useRef } from 'react';
import LoginImperative from '../components/LoginImperative';

const UseImperativeHandle = () => {
  const loginRef = useRef();
  console.log('render dari parent');
  return (
    <main>
      <LoginImperative ref={loginRef} />
      <div className="imperative">
        <p>Parent Component</p>
        <button onClick={() => loginRef.current.setLogin()}>
          Login dari parent
        </button>
      </div>
    </main>
  );
};

export default UseImperativeHandle;
