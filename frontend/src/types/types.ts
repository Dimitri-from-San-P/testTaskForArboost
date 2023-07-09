export type State = {
  touristsArr: Tourist[];
};

export type Tourist = {
  id: number;
  name: string;
  possibleDate?: Date | null;
};

export type IdTourist = Tourist['id'];
