'use client';

import { useId } from 'react';
import css from './Input.module.css';

interface IInputProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, label, value, placeholder, onChange }: IInputProps) => {
  const inputId = useId();

  return (
    <div className={css.inputContainer}>
      <label htmlFor={inputId} className={css.label}>
        {label}
      </label>
      <div>
        <input
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={css.input}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Input;
