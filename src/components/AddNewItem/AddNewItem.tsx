import { ChangeEvent, FC, KeyboardEvent } from 'react';

import s from 'components/AddNewItem/AddNewItem.module.css';
import { ReturnComponentType } from 'types';

type AddNewItemType = {
  error: null | string;
  onKeyPressAddItem: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: () => void;
  inputNumber: string;
};

export const AddNewItem: FC<AddNewItemType> = ({
  error,
  onKeyPressAddItem,
  onChangeHandler,
  onSubmitHandler,
  inputNumber,
}): ReturnComponentType => (
  <div className={s.wrapper}>
    <input
      className={s.input}
      onChange={onChangeHandler}
      value={inputNumber}
      onKeyPress={onKeyPressAddItem}
      placeholder="Enter a number..."
      type="number"
    />
    <button className={s.button} type="submit" onClick={onSubmitHandler}>
      Submit
    </button>
    <div className={s.error}>{error}</div>
  </div>
);
