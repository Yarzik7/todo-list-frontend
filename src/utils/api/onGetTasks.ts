import axios, { AxiosResponse } from 'axios';
import { handleAsyncOperationErrors } from './handleAsyncOperationError';
import type { ITask } from '@/types/Task.types';

axios.defaults.baseURL = 'https://todo-list-backend-d1xw.onrender.com/api';

export const onGetTasks = async () => {
  return await handleAsyncOperationErrors<ITask[]>(async (): Promise<ITask[]> => {
    const getTasksResponse: AxiosResponse<ITask[]> = await axios.get('/tasks');
    return getTasksResponse.data;
  });
};
