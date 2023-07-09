import React, { useContext, useState } from 'react';
import { Tourist } from '../types/types';
import stateContext from '../reducer/context';
import Calendar from '../Calendar/Calendar';
import styles from './TouristCard.module.scss';

function TouristCard({ tourist }: { tourist: Tourist }): JSX.Element {
  const { dispatch } = useContext(stateContext);
  const [calendar, setCalendar] = useState(false);

  const openCalendar = (): void => {
    setCalendar((prev) => !prev);
  };

  const deleteTourist = (): void => {
    dispatch({ type: 'DEL_TOURIST', payload: tourist.id });
  };
  return (
    <div className={styles.touristCard}>
      <button type="button" onClick={openCalendar} className={styles.openCalendarBtn}>
        <svg fill="currentColor" viewBox="0 0 16 16" height="2em" width="2em">
          <path d="M11 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z" />
          <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z" />
        </svg>
      </button>
      {calendar && <Calendar tourist={tourist} />}
      <div className={styles.touristCardName}>{tourist.name}</div>
      <div onClick={deleteTourist} className={styles.deleteIcon}>
        <svg baseProfile="tiny" viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em">
          <path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293a.999.999 0 11-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12 8.293 9.707a.999.999 0 111.414-1.414L12 10.586l2.293-2.293a.999.999 0 111.414 1.414L13.414 12l2.293 2.293z" />
        </svg>
      </div>
    </div>
  );
}

export default TouristCard;
