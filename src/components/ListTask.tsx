import { ListItemTask } from './ListItemTask';
import { Task } from '../interfaces/interfaces';
import { useTodoContext } from '../hooks/useTodoContext';

export const ListTask = () => {
  const initialState = useTodoContext();
  return (
    <>
      {console.log(initialState)}
      <ul className="list-group mt-3">
        {initialState.map((item: Task) => (
          <li key={item.id} className="list-group-item d-flex">
            <ListItemTask item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
