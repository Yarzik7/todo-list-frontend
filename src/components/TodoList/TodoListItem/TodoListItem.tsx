'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { onUpdateTask, onDeleteTask } from '@/utils/api';

import { FaTrashAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Loader from '@/components/Loader/Loader';

import type { ITask } from '@/types/Task.types';
import type { AxiosResponse } from 'axios';
import type { IError } from '@/types/Error.types';

import css from './TodoListItem.module.css';

interface ITodoListItemProps {
  id: string;
  caption: string;
  isCompleted: boolean;
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

const TodoListItem = ({ id, caption, isCompleted, setTasks }: ITodoListItemProps) => {
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const isDisabled = isDeleting || isChanging;

  const handleChangeTaskStatus = async () => {
    setIsChanging(true);
    const updateTaskResponse: AxiosResponse | IError = await onUpdateTask(id, { isCompleted: !isCompleted });
    setIsChanging(false);

    if ('error' in updateTaskResponse && updateTaskResponse.error) {
      return alert(updateTaskResponse.message);
    }

    if (!('error' in updateTaskResponse)) {
      setTasks(tasks => tasks.map(task => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
    }
  };

  const handleDeleteTask = async (): Promise<void> => {
    setIsDeleting(true);
    const deleteTaskResponse: AxiosResponse | IError = await onDeleteTask(id);
    setIsDeleting(false);

    if ('error' in deleteTaskResponse && deleteTaskResponse.error) {
      return alert(deleteTaskResponse.message);
    }

    if (!('error' in deleteTaskResponse)) {
      setTasks(tasks => tasks.filter(task => task.id !== id));
    }
  };

  return (
    <li className={css.todoListItem}>
      <div className={css.todoListItemDescriptionBox}>
        <label htmlFor={id} className={css.todoListItemLabel}>
          <input
            id={id}
            type="checkbox"
            checked={isCompleted}
            disabled={isDisabled}
            onChange={handleChangeTaskStatus}
            className={css.checkbox}
          />
          <span className={css.customCheckbox}>
            {isChanging && <Loader size="70%" />}
            {!isChanging && isCompleted && <IoMdClose />}
          </span>
          {caption}
        </label>
      </div>

      {isDisabled ? (
        <Loader size={20} />
      ) : (
        <button
          type="button"
          disabled={isDisabled}
          onClick={handleDeleteTask}
          className={css.todoListItemControlPanelBtn}
        >
          <FaTrashAlt />
        </button>
      )}
    </li>
  );
};

export default TodoListItem;
