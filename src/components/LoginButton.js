import React, { useContext } from 'react';
import { LoginContext } from '../hooks-contoh/UseContext';

const LoginButton = () => {
  const [isLogin, setIsLogin] = useContext(LoginContext);
  const handleClick = () => {
    setIsLogin((login) => !login);
  };
  return (
    <li>
      <a
        onClick={handleClick}
        className={`${!isLogin ? 'login' : 'logout'}`}
        href="#home">
        {!isLogin ? 'Login' : 'Logout'}
      </a>
    </li>
  );
};

export default LoginButton;
