import { useContext, useState } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';

export const AddTask = () => {
  const dispatch = useContext(TodoDispatchContext);

  const [text, setText] = useState<string>('');

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTask = () => {
    if (text.length === 0) return;
    dispatch({
      type: 'Add task',
      payload: { id: Math.random(), description: text, state: false },
    });
    setText('');
  };

  return (
    <>
      <label className="mb-2" htmlFor="">
        Insertar tarea:
      </label>
      <br />
      <input
        className="form-control mb-2"
        type="text"
        name="description"
        placeholder="Agregar tarea"
        value={text}
        onChange={(e) => handleOnChange(e)}
      />
      <button
        onClick={() => handleAddTask()}
        type="submit"
        className="mb-2 btn btn-primary btn-sm display-6"
      >
        Agregar Tarea
      </button>
    </>
  );
};
