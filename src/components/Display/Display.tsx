import { FC, useState } from 'react';

import { AddNewItem } from 'components/AddNewItem/AddNewItem';
import styles from 'components/Display/Display.module.css';
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
} from 'utils/arithmetic_values_functions';

export const Display: FC = (): ReturnComponentType => {
  const VALUE = 0;
  const [arrNumbers, setArrNumbers] = useState<number[]>([VALUE, VALUE]);

  const mean = getArithmeticMean(arrNumbers);
  const median = getMedian(arrNumbers);
  const stdDeviation = getStandardDeviation(arrNumbers);
  const mode = getMode(arrNumbers);

  const addItem = (item: number): void => {
    setArrNumbers([...arrNumbers, item]);
  };

  const setJson1234Data = (): void => {
    setArrNumbers(data1234.data);
  };

  const setJson4321Data = (): void => {
    setArrNumbers(data4321.data);
  };

  return (
    <div className={styles.app}>
      <div className={styles.wrapperMonitor}>
        <MonitorValue value={mean} title="Mean" />
        <MonitorValue value={median} title="Median" />
        <MonitorValue value={stdDeviation} title="Std deviation" />
        <MonitorValue value={mode} title="Mode" />
      </div>
      <div className={styles.wrapperInput}>
        <AddNewItem addNewItem={addItem} />
      </div>
      <div className={styles.wrapperButtons}>
        <ReloadDataButton reloadData={setJson1234Data} title="Reload JSON-1234 Data" />
        <ReloadDataButton reloadData={setJson4321Data} title="Reload JSON-4321 Data" />
      </div>
    </div>
  );
};
