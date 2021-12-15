import { FC } from 'react';

import s from 'components/MonitorValue/MonitorValue.module.css';
import { ReturnComponentType } from 'types';

type RoundType = {
  title: string;
  value: string;
};

export const MonitorValue: FC<RoundType> = ({ value, title }): ReturnComponentType => (
  <div className={s.round}>
    <div className={s.wrapperRound}>
      <span className={s.title}>{title}</span>
      <div>{value}</div>
    </div>
  </div>
);
