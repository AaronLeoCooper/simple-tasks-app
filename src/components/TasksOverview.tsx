import { Task } from "../type";
import {
  getCompletedTasks,
  getIssueTasks,
  getLiveTasks,
  getUpcomingTasks,
} from "../utils";

type Props = {
  tasks: Task[];
};

export function TasksOverview({ tasks }: Props) {
  //
  // Left this here to show how tasks SHOULD have been accessed with Jotai!
  //
  // const [tasks, setTasks] = useAtom(tasksAtom);
  //
  //
  // Alternatively:
  //
  // const tasks = useAtomValue(tasksAtom);
  //
  // I made a complete blunder here earlier, using `useAtom` and completely
  // forgetting that it's got a `useState` interface, with a value and setter.
  //
  // 🤦
  //

  return (
    <div className="flex justify-around w-full max-w-xl border-2 rounded-xl">
      <div className="flex flex-col items-center p-3">
        <h3 className="text-md uppercase tracking-wider">Tasks</h3>
        <h2
          className="text-2xl font-bold text-blue-500"
          data-testid="all-tasks"
        >
          {tasks.length}
        </h2>
      </div>
      <div className="flex flex-col items-center p-3">
        <h3 className="text-md uppercase tracking-wider">Live</h3>
        <h2
          className="text-2xl font-bold text-orange-500"
          data-testid="live-tasks"
        >
          {getLiveTasks(tasks).length}
        </h2>
      </div>
      <div className="flex flex-col items-center p-3">
        <h3 className="text-md uppercase tracking-wider">Upcoming</h3>
        <h2
          className="text-2xl font-bold text-yellow-500"
          data-testid="upcoming-tasks"
        >
          {getUpcomingTasks(tasks).length}
        </h2>
      </div>
      <div className="flex flex-col items-center p-3">
        <h3 className="text-md uppercase tracking-wider">Completed</h3>
        <h2
          className="text-2xl font-bold text-green-500"
          data-testid="completed-tasks"
        >
          {getCompletedTasks(tasks).length}
        </h2>
      </div>
      <div className="flex flex-col items-center p-3">
        <h3 className="text-md uppercase tracking-wider">Issues</h3>
        <h2
          className="text-2xl font-bold text-red-500"
          data-testid="issue-tasks"
        >
          {getIssueTasks(tasks).length}
        </h2>
      </div>
    </div>
  );
}
