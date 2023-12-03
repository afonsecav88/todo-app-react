import { createContext } from 'react';
import { Task } from '../interfaces/interfaces';

export const TodoContext = createContext<Task[]>([
  {
    id: 'sass222ss',
    description: 'Esta es mi primera tarea',
    state: false,
  },
  {
    id: 'sass222sssss',
    description: 'Esta es mi segunda tarea',
    state: false,
  },
]);
export const TodoDispatchContext = createContext(null);
