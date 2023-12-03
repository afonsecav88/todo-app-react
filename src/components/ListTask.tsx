import { useContext } from 'react';
import { ListItemTask } from './ListItemTask';
import { TodoContext } from '../context/TodoContext';
import { Task } from '../interfaces/interfaces';

export const ListTask = () => {
  const initialTask: Task[] = useContext<Task[]>(TodoContext);
  return (
    <>
      <ul className="list-group mt-3">
        {initialTask.map((item) => (
          <li key={item.id} className="list-group-item d-flex">
            <ListItemTask item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
