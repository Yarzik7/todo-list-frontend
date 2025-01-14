import React from 'react';
import css from './DecoratorBox.module.css';

interface IDecoratorBoxProps {
  children: React.ReactNode;
}

const DecoratorBox = ({ children }: IDecoratorBoxProps) => {
  return <div className={css.decoratorBox}>{children}</div>;
};

export default DecoratorBox;
