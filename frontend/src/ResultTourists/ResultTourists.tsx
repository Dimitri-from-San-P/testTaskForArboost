import React, { useContext } from 'react';
import stateContext from '../reducer/context';
import { Tourist } from '../types/types';
import styles from './ResultTourists.module.scss';

type Result = { id: number; date: string; names: { id: number; name: string }[] }[];

function ResultTourists(): JSX.Element {
  const { state } = useContext(stateContext);
  const allTourists = state.touristsArr;
  const filterTouristByDate = (tourists: Tourist[]): Result => {
    const groupedTourists: {
      [date: string]: { id: number; names: { id: number; name: string }[] };
    } = {};
    const result: Result = [];

    tourists.forEach((tourist) => {
      if (tourist.possibleDate) {
        const date = tourist.possibleDate;
        const dateKey = `${date.getDate()} ${getMonthName(date.getMonth())} - `;

        if (groupedTourists[dateKey]) {
          groupedTourists[dateKey].names.push({ id: tourist.id, name: tourist.name });
        } else {
          groupedTourists[dateKey] = {
            id: tourist.id,
            names: [{ id: tourist.id, name: tourist.name }],
          };
        }
      }
    });

    Object.keys(groupedTourists).forEach((dateKey) => {
      if (groupedTourists[dateKey].names.length >= 2) {
        result.push({
          id: groupedTourists[dateKey].id,
          date: dateKey,
          names: groupedTourists[dateKey].names,
        });
      }
    });
    return result;
  };

  const getMonthName = (month: number): string => {
    const months = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];

    return months[month];
  };

  const sortedTourist = filterTouristByDate(allTourists);

  return (
    <div className={styles.resultList}>
      {sortedTourist.map((tourist) => (
        <div key={tourist.id} className={styles.resultContainer}>
          <div>{tourist.date}</div>
          <div>
            {tourist.names.map((person, index) => (
              <React.Fragment key={person.id}>
                <span className={styles.personName}>{person.name}</span>
                {index !== tourist.names.length - 1 && <span>, </span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultTourists;
