import { useContext } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';

export const useTodoDispatchContext = () => {
  return useContext(TodoDispatchContext);
};
