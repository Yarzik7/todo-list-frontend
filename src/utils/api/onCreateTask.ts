import axios, { AxiosResponse } from 'axios';
import { handleAsyncOperationErrors } from './handleAsyncOperationError';
import type { ITask } from '@/types/Task.types';

export const onCreateTask = async (taskData: Omit<ITask, 'id'>) => {
  return await handleAsyncOperationErrors<ITask>(async (): Promise<ITask> => {
    const createTaskResponse: AxiosResponse<ITask> = await axios.post('/tasks', taskData);
    return createTaskResponse.data;
  });
};
