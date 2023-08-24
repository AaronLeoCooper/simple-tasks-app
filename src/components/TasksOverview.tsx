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
  return (
    <div>
      <div>
        <h3>Tasks</h3>
        <h2 data-testid="all-tasks">{tasks.length}</h2>
      </div>
      <div>
        <h3>Live</h3>
        <h2 data-testid="live-tasks">{getLiveTasks(tasks).length}</h2>
      </div>
      <div>
        <h3>Upcoming</h3>
        <h2 data-testid="upcoming-tasks">{getUpcomingTasks(tasks).length}</h2>
      </div>
      <div>
        <h3>Completed</h3>
        <h2 data-testid="completed-tasks">{getCompletedTasks(tasks).length}</h2>
      </div>
      <div>
        <h3>Issues</h3>
        <h2 data-testid="issue-tasks">{getIssueTasks(tasks).length}</h2>
      </div>
    </div>
  );
}
