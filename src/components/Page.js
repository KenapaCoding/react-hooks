import React, { useContext } from 'react';
import { LoginContext } from '../hooks-contoh/UseContext';

const Page = () => {
  const [isLogin, setIsLogin] = useContext(LoginContext);
  return (
    <div className="container">
      <div className="hooks mt-4">
        {isLogin ? 'You Are Login' : 'You Are Logout, please Login ...'}
      </div>
    </div>
  );
};

export default Page;
