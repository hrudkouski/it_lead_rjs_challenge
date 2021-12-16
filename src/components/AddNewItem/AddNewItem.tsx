import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import styles from 'components/AddNewItem/AddNewItem.module.css';
import { ReturnComponentType } from 'types';

type AddNewItemType = {
  addNewItem: (item: number) => void;
};

export const AddNewItem: FC<AddNewItemType> = ({ addNewItem }): ReturnComponentType => {
  const [inputNumber, setInputNumber] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setInputNumber(value);
  };

  const onSubmitHandler = (): void => {
    const trimmedTitle = inputNumber.trim();
    if (trimmedTitle) {
      addNewItem(Number(trimmedTitle));
      setInputNumber('');
    } else {
      setError('Please, write your number');
    }
  };

  const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (error !== null) {
      setError(null);
    }
    if (e.key === 'Enter') {
      onSubmitHandler();
    }
  };

  return (
    <div>
      <input
        className={styles.input}
        onChange={onChangeHandler}
        value={inputNumber}
        onKeyPress={onKeyPressAddItem}
        placeholder="Enter a number..."
        type="number"
      />
      <button className={styles.button} type="submit" onClick={onSubmitHandler}>
        Submit
      </button>
      <div className={styles.error}>{error}</div>
    </div>
  );
};
