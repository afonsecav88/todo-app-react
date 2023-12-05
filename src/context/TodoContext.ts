import { createContext } from 'react';
import { Task } from '../interfaces/interfaces';
import { TodoActions } from '../reducer/actions';

export const TodoContext = createContext<Task[]>([]);
export const TodoDispatchContext = createContext<TodoActions>(
  {} as TodoActions
);
