import { Task } from '../interfaces/interfaces';
import { TodoActions } from './actions';

export const TodoReducer = (tasks: Task[], action: TodoActions): Task[] => {
  switch (action.type) {
    case 'Add task': {
      return [...tasks, action.payload];
    }
    case 'Edit task': {
      return tasks.map((task: Task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
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
