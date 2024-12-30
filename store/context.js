import {createContext, useContext, useState, useEffect} from 'react';
import App from '../App';

export const AppContext = createContext({});

export const ContextProvider = children => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext in AppContext Provider');
  }
  return context;
};
