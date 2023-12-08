export interface Task {
  id: number;
  description: string;
  state: boolean;
}

export interface ListTasks {
  tasks: Task[];
}
