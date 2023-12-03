import { useContext, useState } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';
import { addTask } from '../reducer/actions';

export const AddTask = () => {
  const dispatch = useContext(TodoDispatchContext);

  const [text, setText] = useState<string>('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTask = () => {
    if (text.length === 0) return;
    dispatch(addTask(text));
    setText('');
  };

  return (
    <>
      <label className="mb-2" htmlFor="insert_task">
        Insertar tarea:
      </label>
      <br />
      <input
        className="form-control mb-2"
        type="text"
        id='insert_task'
        placeholder="Agregar tarea"
        name="description"
        value={text}
        onChange={(event) => handleOnChange(event)}
      />
      <button
        onClick={() => handleAddTask()}
        type="submit"
        className="mb-2 btn btn-success btn-sm float-end "
      >
        Agregar Tarea
      </button>
    </>
  );
};
