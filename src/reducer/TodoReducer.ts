import { Task } from '../interfaces/interfaces';
import { TodoActions } from './actions';

export const TodoReducer = (state: Task[], action: TodoActions): Task[] => {
  switch (action.type) {
    case 'Add task': {
      return [...state, action.payload];
    }

    case 'Remove task': {
      return state.filter((task: Task) => task.id !== action.id);
    }

    default: {
      return state;
    }
  }
};
