import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import stateContext from '../reducer/context';
import { Tourist } from '../types/types';

function Calendar({ tourist }: { tourist: Tourist }): JSX.Element {
  const { dispatch } = useContext(stateContext);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null): void => {
    setSelectedDate(date);
    dispatch({ type: 'ADD_TOURIST_DATA', payload: { id: tourist.id, possibleDate: date } });
  };

  return <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="dd.MM.yyyy" />;
}

export default Calendar;
