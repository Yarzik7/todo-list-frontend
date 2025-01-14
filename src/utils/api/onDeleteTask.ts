import axios, { AxiosResponse } from 'axios';
import { handleAsyncOperationErrors } from './handleAsyncOperationError';

export const onDeleteTask = async (taskId: string) => {
  return await handleAsyncOperationErrors(async (): Promise<AxiosResponse> => {
    const deleteTaskResponse: AxiosResponse = await axios.delete(`/tasks/${taskId}`);
    return deleteTaskResponse;
  });
};
