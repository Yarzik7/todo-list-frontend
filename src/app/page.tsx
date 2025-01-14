'use client';

import React, { useState, useEffect } from 'react';
import { onGetTasks, onCreateTask } from '@/utils/api';

import Section from '@/components/Section/Section';
import Container from '@/components/Section/Container/Container';
import DecoratorBox from '@/components/DecoratorBox/DecoratorBox';
import TodoList from '@/components/TodoList/TodoList';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Loader from '@/components/Loader/Loader';

import type { ITask } from '@/types/Task.types';
import type { IError } from '@/types/Error.types';

import css from './page.module.css';

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [caption, setCaption] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const isDisabled = isLoading || isCreating;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(event.target.value);
  };

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

  const handleCreateTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!caption) return alert('The task caption cannot be empty.');
    setIsCreating(true);
    const createTaskResponse: ITask | IError = await onCreateTask({ caption, isCompleted: false });
    setIsCreating(false);

    if ('error' in createTaskResponse && createTaskResponse.error) {
      return alert(createTaskResponse.message);
    }

    if (!('error' in createTaskResponse)) {
      setTasks(tasks => [createTaskResponse, ...tasks]);
      setCaption('');
    }
  };

  return (
    <Section>
      <Container>
        <DecoratorBox>
          <h1 className={css.pageHeading}>Todo List</h1>
        </DecoratorBox>

        <DecoratorBox>
          <form onSubmit={handleCreateTask}>
            <fieldset disabled={isDisabled} className={css.fieldset}>
              <legend className="visually-hidden">Create task</legend>
              <Input name="caption" label="Caption" placeholder="Learn English" value={caption} onChange={onChange} />
              {isCreating ? <Loader size={40} /> : <Button type="submit" caption="Create" />}
            </fieldset>
          </form>
        </DecoratorBox>

        <DecoratorBox>
          <TodoList tasks={tasks} isLoading={isLoading} setTasks={setTasks} />
        </DecoratorBox>
      </Container>
    </Section>
  );
}
