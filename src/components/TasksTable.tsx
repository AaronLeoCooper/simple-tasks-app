import { Task } from "../type";

type Props = {
  tasks: Task[];
  toggleTaskCompletion: (taskId: string) => void;
};

export function TasksTable({ tasks, toggleTaskCompletion }: Props) {
  return (
    <div className="p-5 border-2 rounded-xl w-full max-w-xl">
      <table className="table-auto w-full text-center">
        <thead className="border-b-2">
          <tr>
            <th className="p-3 bg-slate-200">Completed</th>
            <th className="p-3 bg-slate-200 border-l-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(({ id, name, completedDate }) => (
            <tr
              key={id}
              className="border-b-2 last:border-b-0 even:bg-slate-50"
              data-testid={`row-${id}`}
            >
              <td className="p-3">
                <input
                  type="checkbox"
                  aria-label={`checkbox ${id}`}
                  id={id}
                  checked={!!completedDate}
                  onChange={() => toggleTaskCompletion(id)}
                />
              </td>
              <td className="p-3 border-l-2">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
