
import { useContext, useReducer } from 'react';
import { TodoContext, TodoDispatchContext } from './TodoContext';
import { TodoReducer } from '../reducer/TodoReducer';


export const TodoProvider = ({ children }) => {

   const initializer = () => JSON.parse(localStorage.getItem('Tasks')) || [];

   const initialState = useContext(TodoContext);
   const [state, dispatch] = useReducer(TodoReducer, initialState, initializer);

   return (
      <TodoContext.Provider value={state}>
         <TodoDispatchContext.Provider value={dispatch}>
            {children}
         </TodoDispatchContext.Provider>
      </TodoContext.Provider>
   );
};
