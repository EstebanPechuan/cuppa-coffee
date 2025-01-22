import styles from './Button.module.scss'
import React from 'react';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className={styles.btn_gradient}>
            {text}
        </button>
    )
}
export default Button;