import { IdTourist } from './types';

type Action =
  | { type: 'ADD_TOURIST'; payload: string }
  | { type: 'DEL_TOURIST'; payload: IdTourist }
  | { type: 'ADD_TOURIST_DATA'; payload: { id: number; possibleDate: Date | null } };

export default Action;
