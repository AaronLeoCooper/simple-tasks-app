import { Task } from "../type";

type Props = {
  tasks: Task[];
  toggleTaskCompletion: (taskId: string) => void;
};

export function TasksTable({ tasks, toggleTaskCompletion }: Props) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Completed</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(({ id, name, completedDate }) => (
          <tr key={id} data-testid={`row-${id}`}>
            <td>
              <input
                type="checkbox"
                aria-label={`checkbox ${id}`}
                id={id}
                checked={!!completedDate}
                onChange={() => toggleTaskCompletion(id)}
              />
            </td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
