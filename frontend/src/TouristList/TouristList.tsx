import React, { useContext } from 'react';
import TouristCard from '../TouristCard/TouristCard';
import stateContext from '../reducer/context';
import styles from './TouristList.module.scss';

function TouristList(): JSX.Element {
  const { state } = useContext(stateContext);
  return (
    <div className={styles.tableContainer}>
      {state.touristsArr.map((tourist) => (
        <TouristCard tourist={tourist} key={tourist.id} />
      ))}
    </div>
  );
}

export default TouristList;
