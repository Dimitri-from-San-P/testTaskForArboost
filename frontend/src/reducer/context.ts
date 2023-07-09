import { createContext } from 'react';
import { Context } from './types';
import { init } from './reducer';

const initialContextValue: Context = {
  state: init,
  dispatch: () => {},
};
const stateContext = createContext(initialContextValue);

export default stateContext;
