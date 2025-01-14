import React, { Dispatch, SetStateAction } from 'react';

import TodoListItem from './TodoListItem/TodoListItem';
import Loader from '../Loader/Loader';

import type { ITask } from '@/types/Task.types';
import css from './TodoList.module.css';

interface ITodoListProps {
  tasks: ITask[];
  isLoading: boolean;
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

const TodoList = ({ tasks, isLoading, setTasks }: ITodoListProps) => {
  return (
    <>
      {!isLoading && tasks.length < 1 && <p className={css.todoListMessage}>Todo list is empty.</p>}
      {isLoading && <Loader size={60} />}
      {tasks.length > 0 && (
        <ul className={css.todoList}>
          {tasks.map(task => (
            <TodoListItem
              key={task.id}
              id={task.id}
              caption={task.caption}
              isCompleted={task.isCompleted}
              setTasks={setTasks}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
