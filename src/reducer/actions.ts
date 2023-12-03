import { Task } from '../interfaces/interfaces';

export type TodoActions =
  | {
      type: 'Add task';
      payload: Task;
    }
  | { type: 'Remove task' };

export const addTask = (): Task => {
  return {
    type: 'Add task',
    payload: Task,
  };
};

export const removeTask = (): Task[] => {
  return { type: 'Remove task' };
};
