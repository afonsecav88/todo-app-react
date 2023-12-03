import { Task } from '../interfaces/interfaces';
import { TodoActions } from './actions';

export const TodoReducer = (tasks: Task[], action: TodoActions): Task[] => {
  switch (action.type) {
    case 'Add task': {
      return [...tasks, action.payload];
    }
    case 'Edit task': {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return action.task;
        }
        return task;
      });
    }
    case 'Remove task': {
      return tasks.filter((task: Task) => task.id !== action.id);
    }
    default: {
      return tasks;
    }
  }
};
