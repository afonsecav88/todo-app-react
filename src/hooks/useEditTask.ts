import { ChangeEvent, useState } from 'react';
import { removeTask, editTask } from '../reducer/actions';
import { Task } from '../interfaces/interfaces';
import { useTodoContext } from './useTodoContext';
import { useNotifications } from './useNotifications';

export const useEditTask = (item: Task) => {
  const { taskDeleted, taskEdited } = useNotifications();
  const { dispatch } = useTodoContext();
  const [isEdit, setIsEdit] = useState(true);
  const [valueDescription, setValueDescription] = useState<string>(
    item.description
  );

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDescription(event.target.value);
  };

  const handleDeleteTask = () => {
    dispatch(removeTask(item.id));
    taskDeleted();
  };

  const handleEditTask = () => {
    setIsEdit(true);
    const newItem = { ...item, description: valueDescription };
    dispatch(editTask(newItem));
    taskEdited();
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
