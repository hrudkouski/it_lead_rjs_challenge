import { FC } from 'react';

import styles from 'components/ReloadDataButton/ReloadDataButton.module.css';
import { ReturnComponentType } from 'types';

type ReloadDataButtonType = {
  title: string;
  reloadData: () => void;
};

export const ReloadDataButton: FC<ReloadDataButtonType> = ({
  reloadData,
  title,
}): ReturnComponentType => (
  <button className={styles.button} type="button" onClick={reloadData}>
    {title}
  </button>
);
