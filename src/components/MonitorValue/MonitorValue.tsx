import { FC } from 'react';

import styles from 'components/MonitorValue/MonitorValue.module.css';
import { ReturnComponentType } from 'types';

type RoundType = {
  title: string;
  value: string;
};

export const MonitorValue: FC<RoundType> = ({ value, title }): ReturnComponentType => (
  <div className={styles.wrapperRound}>
    <div className={styles.round}>
      <span className={styles.title}>{title}</span>
      <div>{value}</div>
    </div>
  </div>
);
