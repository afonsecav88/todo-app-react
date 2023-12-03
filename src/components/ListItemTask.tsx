import { useContext } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';
import { removeTask } from '../reducer/actions';

export const ListItemTask = ({ item }) => {
  const dispatch = useContext(TodoDispatchContext);
  const handleOnClick = () => {
    dispatch(removeTask(item.id));
  };
  return (
    <>
      {item.description}
      <button
        onClick={() => handleOnClick()}
        className="bnt btn alert-danger btn-sm"
      >
        Eliminar
      </button>
    </>
  );
};
