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
        <h1 className="m-4">Lista de tareas
          <span className="top-0 start-100 translate-middle badge rounded-pill bg-success m-4 ">
            {state.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </h1>
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
    </TodoContext.Provider >
  );
};
