import { useEffect } from 'react';
import { useTodoContext } from './useTodoContext';

export const useUpdateLocalStorage = () => {
  const { tasks } = useTodoContext();

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }, [tasks]);
};
