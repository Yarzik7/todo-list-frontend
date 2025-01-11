import React from "react";
import css from "./Section.module.css";

interface ISectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: ISectionProps) => {
  return <section className={css.section}>{children}</section>;
};

export default Section;
