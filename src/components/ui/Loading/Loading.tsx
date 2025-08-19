import React from 'react';
import styles from './Loading.module.scss';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  text = 'در حال بارگذاری...',
}) => {
  return (
    <div className={`${styles.loadingWrapper} ${styles[size]}`}>
      <div className={styles.spinner}></div>
      {text && <p className={styles.loadingText}>{text}</p>}
    </div>
  );
};
