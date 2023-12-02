import { AddTask } from './components/AddTask';
import { ListTask } from './components/ListTask';
import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
  return (
    <TodoProvider>
      <ListTask />
      <AddTask />
    </TodoProvider>
  );
};
