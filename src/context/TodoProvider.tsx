import { useReducer } from 'react';
import { TodoContext, TodoDispatchContext } from './TodoContext';
import { TodoReducer } from '../reducer/TodoReducer';
import { Task } from '../interfaces/interfaces';

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: Task[] = [];

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const initializer = () => JSON.parse(localStorage.getItem('Tasks')) || [];

  const [state, dispatch] = useReducer(TodoReducer, initialState, initializer);

  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};
