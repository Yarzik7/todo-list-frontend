import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";
import css from "./TodoList.module.css";

const TodoList = () => {
  return (
    <ul className={css.todoList}>
      <TodoListItem label="1" />
      <TodoListItem label="1" />
      <TodoListItem label="1" />
    </ul>
  );
};

export default TodoList;
