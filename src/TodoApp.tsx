import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ListTask } from './components/ListTask';
import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
  return (
    <TodoProvider>
      <Header />
      <div className="col d-flex gap-2 justify-content-around flex-wrap">
        <div className="row-md-8">
          <ListTask />
        </div>
        <div className="row-md-4">
          <AddTask />
        </div>
      </div>
    </TodoProvider>
  );
};
