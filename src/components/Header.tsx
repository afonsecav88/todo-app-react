import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const Header = () => {

   const state = useContext(TodoContext)
   return (
      <>
         <h1 className="m-4">Lista de tareas
            <span className="top-0 start-100 translate-middle badge rounded-pill bg-success m-4 ">
               {state.length}
               <span className="visually-hidden">unread messages</span>
            </span>
         </h1>
         <hr />
      </>
   )
}
