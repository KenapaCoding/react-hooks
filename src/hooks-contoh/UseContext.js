import React from 'react';
import Navbar from '../components/Navbar';
import { useState, useContext, createContext } from 'react';
import Page from '../components/Page';

export const LoginContext = createContext();

const UseContext = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <LoginContext.Provider value={[isLogin, setIsLogin]}>
      <Navbar />
      <Page />
    </LoginContext.Provider>
  );
};
export default UseContext;
