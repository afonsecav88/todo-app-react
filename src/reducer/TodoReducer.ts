import { Task } from '../interfaces/Task';

const initialState: Task = [
  {
    id: 'sass222ss',
    description: 'saadasd',
    state: false,
  },
];

type TodoActions =
  | {
      type: 'Add task';
      payload: Task;
    }
  | { type: 'Remove task' };

export const TodoReducer = (initialState: Task, action: TodoActions): Task => {
  switch (action.type) {
    case 'Add task':
      return [...initialState, action.payload];

    case 'Remove task':
      return initialState.filter((task: Task) => task.id !== action.id);

    default:
      return initialState;
  }
  return initialState;
};
