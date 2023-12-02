import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const Task = () => {
  const initialTask = useContext(TodoContext);
  console.log(initialTask);
  return (
    <div>
      <pre>{JSON.stringify(initialTask)} </pre>
    </div>
  );
};
