import { useContext, useState } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';
import { editTask, removeTask } from '../reducer/actions';

export const ListItemTask = ({ item }) => {
  const dispatch = useContext(TodoDispatchContext);

  const [isEdit, setIsEdit] = useState(true)
  const [valueDescription, setValueDescription] = useState<string>(item.description);

  const handleDelete = () => {
    dispatch(removeTask(item.id));
  };

  const handleEdit = () => {
    setIsEdit(true)
    dispatch(editTask(item.id));
  };

  const handleOnChange = (event) => {
    setValueDescription(event.target.value)
  }

  return (
    <>

      <input type="text" name="description" disabled={isEdit} value={valueDescription} onChange={(event) => handleOnChange(event)} className={`d-flex ${(isEdit) ? 'input-disable' : ''}`} />
      <button
        onClick={() => handleDelete()}
        className="btn btn-danger btn-sm ms-3 me-2"
      >
        Eliminar
      </button>

      <button
        onClick={() => setIsEdit(false)}
        className={`btn btn-primary btn-sm display-6  ${(!isEdit) ? 'button-disable' : ''}`}
      >
        Editar
      </button>

      <button
        onClick={() => handleEdit()}
        className={`btn btn-outline-success  btn-sm  ${(isEdit) ? 'button-disable' : ''}`}
      >
        Guardar Cambios
      </button>
    </>
  );
};
