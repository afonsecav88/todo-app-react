import { useState } from 'react';
import { TodoContext } from './TodoContext';

export const TodoProvider = ({ children }) => {
  return <TodoContext.Provider value={[]}>{children}</TodoContext.Provider>;
};
