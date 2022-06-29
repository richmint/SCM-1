import React from 'react';

import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  metaMask:'',
  myContract:null,
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode,myContract:state.myContract, metaMask: state.metaMask, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
