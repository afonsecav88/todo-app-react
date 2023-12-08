import { Dispatch, createContext } from 'react';
import { TodoActions } from '../reducer/actions';
import { Task } from '../interfaces/interfaces';

type PropsTodoContext = {
  tasks: Task[];
  dispatch: Dispatch<TodoActions>;
};

export const TodoContext = createContext<PropsTodoContext>(
  {} as PropsTodoContext
);
