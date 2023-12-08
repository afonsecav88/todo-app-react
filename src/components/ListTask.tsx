import { ListItemTask } from './ListItemTask';
import { Task } from '../interfaces/interfaces';
import { useTodoContext } from '../hooks/useTodoContext';

export const ListTask = () => {
  const { tasks } = useTodoContext();
  return (
    <>
      <ul className="list-group mt-3">
        {tasks.map((item: Task) => (
          <li key={item.id} className="list-group-item d-flex">
            <ListItemTask item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
