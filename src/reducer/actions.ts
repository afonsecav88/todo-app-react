import { Task } from '../interfaces/interfaces';

export type TodoActions =
  | {
      type: 'Add task';
      payload: Task;
    }
  | {
      type: 'Edit task';
      payload: Task;
    }
  | { type: 'Remove task'; id: number };

export const addTask = (description: string): TodoActions => {
  const payload: Task = { id: Math.random(), description, state: false };
  return {
    type: 'Add task',
    payload,
  };
};

export const editTask = (payload: Task): TodoActions => {
  return {
    type: 'Edit task',
    payload,
  };
};

export const removeTask = (id: number): TodoActions => {
  return { type: 'Remove task', id };
};
