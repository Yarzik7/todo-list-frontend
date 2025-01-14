import React from 'react';
import { ImSpinner9 } from 'react-icons/im';
import css from './Loader.module.css';

interface ILoaderProps {
  size: string | number;
}

const Loader = ({ size }: ILoaderProps) => {
  return (
    <div className={css.loader}>
      <ImSpinner9 size={size} className={css.spinner} />
    </div>
  );
};

export default Loader;
