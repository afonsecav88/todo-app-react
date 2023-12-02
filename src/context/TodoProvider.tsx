import { TodoContext } from './TodoContext';

interface Task {
  id: string;
  description: string;
  state: boolean;
}

const initialTask: Task = {
  id: 'sass222ss',
  description: 'saadasd',
  state: false,
};

export const TodoProvider = ({ children }) => {
  return (
    <TodoContext.Provider value={initialTask}>{children}</TodoContext.Provider>
  );
};
