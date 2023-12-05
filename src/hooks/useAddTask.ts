import { useContext, useState, ChangeEvent } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';
import { addTask } from '../reducer/actions';

export const useAddTask = () => {
  const dispatch = useContext(TodoDispatchContext);
  const [text, setText] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddTask = () => {
    if (text.length === 0) return;
    dispatch(addTask(text));
    setText('');
  };

  return { handleOnChange, handleAddTask, text };
};
