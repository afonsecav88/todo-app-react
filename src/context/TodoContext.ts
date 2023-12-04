import { createContext } from 'react';
import { Task } from '../interfaces/interfaces';
import { TodoActions } from '../reducer/actions';

export const TodoContext = createContext<Task[]>([
  {
    id: 5555544,
    description: 'Esta es mi primera tarea',
    state: false,
  },
  {
    id: 66666444,
    description: 'Esta es mi segunda tarea',
    state: false,
  },
]);
export const TodoDispatchContext = createContext<TodoActions>(
  {} as TodoActions
);
