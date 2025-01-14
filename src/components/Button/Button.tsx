import React, { ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  caption: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ caption, onClick, ...props }: IButtonProps) => {
  return (
    <button onClick={onClick} className={css.button} {...props}>
      {caption}
    </button>
  );
};

export default Button;
