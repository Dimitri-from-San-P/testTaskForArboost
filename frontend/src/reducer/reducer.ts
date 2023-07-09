import Action from '../types/Action';
import { State } from '../types/types';

export const init: State = {
  touristsArr: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOURIST':
      return {
        ...state,
        touristsArr: [...state.touristsArr, { id: Date.now(), name: action.payload }],
      };
    case 'DEL_TOURIST':
      return {
        ...state,
        touristsArr: state.touristsArr.filter((tourist) => tourist.id !== action.payload),
      };
    case 'ADD_TOURIST_DATA':
      return {
        ...state,
        touristsArr: state.touristsArr.map((tourist) =>
          tourist.id === action.payload.id
            ? { ...tourist, possibleDate: action.payload.possibleDate }
            : tourist
        ),
      };
  }
  return state;
};
