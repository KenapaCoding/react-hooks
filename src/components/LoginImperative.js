import React, { forwardRef, useImperativeHandle, useState } from 'react';

const LoginImperative = (props, ref) => {
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => {
    setIsLogin((login) => !login);
  };
  useImperativeHandle(ref, () => ({
    setLogin: handleClick,
  }));
  console.log('render dari child');
  return (
    <div>
      <ul>
        <li>
          <a
            onClick={handleClick}
            className={`${!isLogin ? 'login' : 'logout'}`}
            href="#home">
            {!isLogin ? 'Login' : 'Logout'}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default forwardRef(LoginImperative);
