import React from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
    label: string;
    variant: 'outlined' | 'filled';
    onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, variant }) => {
    return (
        <button
            className={`${styles.button} ${variant === 'outlined' ? styles.outlined : styles.filled}`}
        >
            {label}
        </button>
    );
};
