import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoReducer } from '../reducer/TodoReducer';
import { ListTasks } from '../interfaces/interfaces';

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: ListTasks[] = [];

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const initializer = () => JSON.parse(localStorage.getItem('Tasks')) || [];

  const [tasks, dispatch] = useReducer(TodoReducer, initialState, initializer);

  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
