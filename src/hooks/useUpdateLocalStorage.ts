import { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useUpdateLocalStorage = () => {
  const state = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(state));
  }, [state]);
};
