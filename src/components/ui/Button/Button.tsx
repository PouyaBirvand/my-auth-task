import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  disabled,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`
        ${styles.button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${fullWidth ? styles.fullWidth : ''} 
        ${loading ? styles.loading : ''} 
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className={styles.spinner}></span>}
      {children}
    </button>
  );
};
