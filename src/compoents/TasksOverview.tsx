import { isAfter, isBefore } from "date-fns";
import { Task } from "../type";

type Props = {
  tasks: Task[];
};

export function TasksOverview({ tasks }: Props) {
  const now = new Date();

  const liveTasks = tasks.filter(({ startDate, dueDate, completedDate }) => {
    return (
      dueDate &&
      isBefore(now, dueDate) &&
      startDate &&
      isAfter(now, startDate) &&
      !completedDate
    );
  });

  const upcomingTasks = tasks.filter(({ startDate, completedDate }) => {
    return startDate && isBefore(now, startDate) && !completedDate;
  });

  const completedTasks = tasks.filter(({ completedDate }) => {
    return !!completedDate;
  });

  const issueTasks = tasks.filter(({ dueDate, completedDate }) => {
    return dueDate && !completedDate && isAfter(now, dueDate);
  });

  return (
    <div>
      <div>
        <h3>Tasks</h3>
        <h2 data-testid="all-tasks">{tasks.length}</h2>
      </div>
      <div>
        <h3>Live</h3>
        <h2 data-testid="live-tasks">{liveTasks.length}</h2>
      </div>
      <div>
        <h3>Upcoming</h3>
        <h2 data-testid="upcoming-tasks">{upcomingTasks.length}</h2>
      </div>
      <div>
        <h3>Completed</h3>
        <h2 data-testid="completed-tasks">{completedTasks.length}</h2>
      </div>
      <div>
        <h3>Issues</h3>
        <h2 data-testid="issue-tasks">{issueTasks.length}</h2>
      </div>
    </div>
  );
}
