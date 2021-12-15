import { FC } from 'react';

import s from './Round.module.css';

import { ReturnComponentType } from 'types';

type RoundType = {
  title: string;
  value: number | string;
};

export const Round: FC<RoundType> = ({ value, title }): ReturnComponentType => (
  <div className={s.round}>
    <div className={s.wrapperRound}>
      <span>{title}</span>
      <div>{value}</div>
    </div>
  </div>
);
