import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';
import { Action, initialState, State } from './types';

type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Props = {
  children: React.ReactNode;
};

export const AppContext = createContext<AppContextType>(null!);

const AppState: React.FC<Props> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value: AppContextType = {
    state,
    dispatch
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppState;
