import { ChangeEvent, useContext, useState } from 'react';
import { TodoDispatchContext } from '../context/TodoContext';
import { removeTask, editTask } from '../reducer/actions';
import { Task } from '../interfaces/interfaces';

export const useEditTask = (item: Task) => {
  const dispatch = useContext(TodoDispatchContext);
  const [isEdit, setIsEdit] = useState(true);
  const [valueDescription, setValueDescription] = useState<string>(
    item.description
  );

  const handleDeleteTask = () => {
    dispatch(removeTask(item.id));
  };

  const handleEditTask = () => {
    setIsEdit(true);
    dispatch(editTask(item.id));
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDescription(event.target.value);
  };

  const handleSetIsEdit = () => {
    setIsEdit(false);
  };

  return {
    isEdit,
    valueDescription,
    handleDeleteTask,
    handleEditTask,
    handleSetIsEdit,
    handleOnChange,
  };
};
