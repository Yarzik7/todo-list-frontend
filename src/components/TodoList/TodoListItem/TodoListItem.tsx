"use client";

import React, { useState } from "react";
import { useId } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import css from "./TodoListItem.module.css";

interface ITodoListItemProps {
  label: string;
}

const TodoListItem = ({ label }: ITodoListItemProps) => {
  const todoId = useId();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onToggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <li className={css.todoListItem}>
      <div className={css.todoListItemDescriptionBox}>
        <label htmlFor={todoId} className={css.todoListItemLabel}>
          <input
            id={todoId}
            type="checkbox"
            checked={isChecked}
            onChange={onToggleCheckbox}
            className={css.checkbox}
          />
          <span className={css.customCheckbox}>
            {isChecked && <IoMdClose />}
          </span>
          {label}
        </label>
      </div>
      <div className={css.todoListItemControlPanel}>
        <button type="button" className={css.todoListItemControlPanelBtn}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
