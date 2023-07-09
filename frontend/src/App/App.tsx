import React, { useMemo, useReducer } from 'react';
import styles from './App.module.scss';
import stateContext from '../reducer/context';
import { init, reducer } from '../reducer/reducer';
import AddName from '../AddName/AddName';
import TouristList from '../TouristList/TouristList';
import ResultTourists from '../ResultTourists/ResultTourists';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, init);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <stateContext.Provider value={contextValue}>
      <div className={styles.container}>
        <AddName />
        <TouristList />
        <ResultTourists />
      </div>
    </stateContext.Provider>
  );
}

export default App;
