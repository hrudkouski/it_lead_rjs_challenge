import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';

import { AddNewItem } from 'components/AddNewItem/AddNewItem';
import s from 'components/Display/Display.module.css';
import { MonitorValue } from 'components/MonitorValue/MonitorValue';
import { ReloadDataButton } from 'components/ReloadDataButton/ReloadDataButton';
import data1234 from 'data/data-1234.json';
import data4321 from 'data/data-4321.json';
import { ReturnComponentType } from 'types';
import {
  getArithmeticMean,
  getMedian,
  getMode,
  getStandardDeviation,
} from 'utils/calculation_value_functions';

export const Display: FC = (): ReturnComponentType => {
  const ZERO = 0;
  const [arrNumbers, setArrNumbers] = useState<number[]>([ZERO, ZERO]);
  const [inputNumber, setInputNumber] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const mean = getArithmeticMean(arrNumbers);
  const median = getMedian(arrNumbers);
  const stdDeviation = getStandardDeviation(arrNumbers);
  const mode = getMode(arrNumbers);

  const addItem = (item: number): void => {
    setArrNumbers([...arrNumbers, item]);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setInputNumber(value);
  };

  const onSubmitHandler = (): void => {
    const trimmedTitle = inputNumber.trim();
    if (trimmedTitle) {
      addItem(Number(trimmedTitle));
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

  const json1234Handler = (): void => {
    setArrNumbers(data1234.data);
  };

  const json4321Handler = (): void => {
    setArrNumbers(data4321.data);
  };

  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <MonitorValue value={mean} title="Mean" />
        <MonitorValue value={median} title="Median" />
        <MonitorValue value={stdDeviation} title="Std deviation" />
        <MonitorValue value={mode} title="Mode" />
      </div>
      <div className={s.wrapperButton}>
        <ReloadDataButton reloadData={json1234Handler} title="Reload JSON-1234 Data" />
        <ReloadDataButton reloadData={json4321Handler} title="Reload JSON-4321 Data" />
      </div>
      <div className={s.wrapperInput}>
        <AddNewItem
          error={error}
          inputNumber={inputNumber}
          onSubmitHandler={onSubmitHandler}
          onKeyPressAddItem={onKeyPressAddItem}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </div>
  );
};
