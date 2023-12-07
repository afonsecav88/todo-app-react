import { useEffect } from 'react';
import { useTodoContext } from './useTodoContext';

export const useUpdateLocalStorage = () => {
  const state = useTodoContext();

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(state));
  }, [state]);
};
