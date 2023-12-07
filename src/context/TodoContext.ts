import { Dispatch, createContext } from 'react';
import { TodoActions } from '../reducer/actions';
import { Task } from '../interfaces/interfaces';

export const TodoContext = createContext<Task[]>([]);
export const TodoDispatchContext = createContext<Dispatch<TodoActions>>(
  {} as Dispatch<TodoActions>
);
