import { Task } from "../type";

type Props = {
  tasks: Task[];
  toggleTaskCompletion: (taskId: string) => void;
};

export function TasksTable({ tasks, toggleTaskCompletion }: Props) {
  return <div></div>;
}
