import { useState, ChangeEvent } from 'react';
import { addTask } from '../reducer/actions';
import { useTodoContext } from './useTodoContext';

export const useAddTask = () => {
  const { dispatch } = useTodoContext();
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
