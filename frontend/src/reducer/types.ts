import Action from '../types/Action';
import { State } from '../types/types';

export type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
