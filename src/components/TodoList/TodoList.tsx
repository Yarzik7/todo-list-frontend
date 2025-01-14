'use client';

import React from 'react';
import { onGetTasks } from '@/utils/api/onGetTasks';
import { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import Loader from '../Loader/Loader';
import type { ITask } from '@/types/Task.types';
import type { IError } from '@/types/Error.types';
import css from './TodoList.module.css';

const TodoList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getTasks = async () => {
      setIsLoading(true);
      const tasksResponse: ITask[] | IError = await onGetTasks();
      setIsLoading(false);

      if ('error' in tasksResponse && tasksResponse.error) {
        return alert(tasksResponse.message);
      }

      if (!('error' in tasksResponse)) {
        setTasks(tasksResponse);
      }
    };

    getTasks();
  }, []);

  return (
    <>
      {isLoading && <Loader size={60} />}
      <ul className={css.todoList}>
        {tasks.map(task => (
          <TodoListItem key={task.id} caption={task.caption} isCompleted={task.isCompleted} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
