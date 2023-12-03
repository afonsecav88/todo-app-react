import { createContext } from 'react';
import { Task } from '../interfaces/interfaces';

export const TodoContext = createContext<Task[]>([]);
export const TodoDispatchContext = createContext(null);
