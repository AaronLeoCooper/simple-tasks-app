export type Project = {
  id: string;
  name: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  userId: string;
  name: string;
  startDate: Date | undefined;
  dueDate: Date | undefined;
  completedDate?: Date | undefined;
};
