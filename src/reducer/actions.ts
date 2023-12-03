import { Task } from '../interfaces/interfaces';

export type TodoActions =
  | {
      type: 'Add task';
      payload: Task;
    }
  | { type: 'Remove task' };

export const addTask = (description: string): TodoActions => {
  const payload: Task = { id: Math.random(), description, state: false };
  return {
    type: 'Add task',
    payload,
  };
};

export const removeTask = (): TodoActions => {
  return { type: 'Remove task' };
};
