import { Task } from './Task';
export const ListTask = () => {
  return (
    <>
      <ul className="list-group mt-3">
        <li className="list-group-item ">
          <Task />
        </li>
      </ul>
    </>
  );
};
