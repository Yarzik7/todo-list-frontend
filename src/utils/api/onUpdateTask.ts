import axios, { AxiosResponse } from 'axios';
import { handleAsyncOperationErrors } from './handleAsyncOperationError';
import type { ITask } from '@/types/Task.types';

export const onUpdateTask = async (taskId: string, updateTaskData: Partial<Omit<ITask, 'id'>>) => {
  return await handleAsyncOperationErrors(async (): Promise<AxiosResponse> => {
    const updateTaskResponse: AxiosResponse = await axios.patch(`/tasks/${taskId}`, updateTaskData);
    return updateTaskResponse;
  });
};
