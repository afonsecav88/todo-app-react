import { useContext } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';

export const ItemTask = ({ item }) => {
  const dispatch = useContext(TodoDispatchContext);
  const handleOnClick = () => {
    dispatch({ type: '' });
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
