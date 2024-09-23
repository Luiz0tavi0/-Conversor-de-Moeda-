import React from 'react';
import style from './button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    handleClick: () => void;
}

const Button = React.memo(({ children, handleClick }: ButtonProps) => {
    // console.log('refatching');
    return (
        <button className={style.card__button} onClick={handleClick} type="button">
            {children}
        </button>
    );
});

export default Button;
