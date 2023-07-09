import React, { useContext, useState } from 'react';
import stateContext from '../reducer/context';
import styles from './AddName.module.scss';

function AddName(): JSX.Element {
  const { dispatch } = useContext(stateContext);

  const [nameInput, setNameInput] = useState('');

  const wrightName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNameInput(event.target.value);
  };

  const touristSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_TOURIST', payload: nameInput });
    setNameInput('');
  };

  return (
    <div className={styles.addName}>
      <form method="post" onSubmit={touristSubmit} className={styles.addForm}>
        <input
          value={nameInput}
          onChange={wrightName}
          type="text"
          id={styles.nameField}
          placeholder="Введите имя"
        />
        <button type="submit" className={styles.addBtn}>
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddName;
