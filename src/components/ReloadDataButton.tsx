import { FC } from 'react';

import s from './ReloadDataButton.module.css';

import { ReturnComponentType } from 'types';

type ReloadDataButtonType = {
  title: string;
  reloadData: () => void;
};

export const ReloadDataButton: FC<ReloadDataButtonType> = ({
  reloadData,
  title,
}): ReturnComponentType => (
  <div className={s.wrapper}>
    <button type="button" onClick={reloadData}>
      {title}
    </button>
  </div>
);
