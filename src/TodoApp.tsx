import { useReducer, useContext } from 'react';
import { AddTask } from './components/AddTask';
import { ListTask } from './components/ListTask';
import { TodoContext, TodoDispatchContext } from './context/TodoContext';
import { TodoReducer } from './reducer/TodoReducer';

export const TodoApp = () => {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <h1 className="m-2">Lista de tareas:</h1>
        <hr />
        <div className="col d-flex gap-2 justify-content-around flex-wrap">
          <div className="row-md-8">
            <ListTask />
          </div>
          <div className="row-md-4">
            <AddTask />
          </div>
        </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};
