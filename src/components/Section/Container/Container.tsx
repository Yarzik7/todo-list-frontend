import React from "react";
import css from "./Container.module.css";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
