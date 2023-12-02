import { AddTask } from './components/AddTask';
import { ListTask } from './components/ListTask';
import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="col d-flex justify-content-between align-content-around container">
        <div className="row-md-6">
          <ListTask />
        </div>
        <div className="row-md-6">
          <AddTask />
        </div>
      </div>
    </TodoProvider>
  );
};
