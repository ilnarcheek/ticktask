import { ITask } from "../types/IData";

export function getTime(dateString: string): string | number {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  const getDayString = (days: number) => {
    if (days % 10 === 1 && days % 100 !== 11) return "день";
    if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100))
      return "дня";
    return "дней";
  };

  if (diffMs < 0) {
    return "Просрочено";
  }

  if (diffDays > 0) {
    return `${diffDays} ${getDayString(diffDays)}`;
  }

  if (diffHours > 0) {
    return `${diffHours}:${diffMinutes} ч`;
  }

  return `${diffMinutes} м`;
}

export function getColorByTime(dateString: string): string[] {
  const targetDate = new Date(dateString);
  const now = new Date();
  const diffMs = targetDate.getTime() - now.getTime();

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 3) {
    return ["var(--bg-red-light)", "var(--fc-red)"];
  } else if (diffDays < 7) {
    return ["var(--bg-yellow-light)", "var(--fc-yellow)"];
  } else {
    return ["var(--bg-green-light)", "var(--fc-green)"];
  }
}

export function getLatestEndDate(tasks: Record<string, ITask>): string | null {
  if (Object.keys(tasks).length === 0) return null;

  const latestDate = Object.values(tasks)
    .filter((task) => {
      if (task.subtasks)
        return task.subtasks.some((subtask) => !subtask.isDone);
    })
    .map((task) => new Date(task.endDate))
    .reduce(
      (maxDate, currentDate) => (currentDate > maxDate ? currentDate : maxDate),
      new Date(0)
    );

  return latestDate.getTime() > 0
    ? latestDate.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Срок закончился";
}

export function getSubtasksCount(tasks: Record<string, ITask>): number[] {
  const allSubtasks = Object.values(tasks).flatMap((task) => task.subtasks);

  if (allSubtasks.length === 0) return [0, 0];

  const completedCount = allSubtasks.filter((subtask) => {
    if (subtask) return subtask.isDone;
  }).length;

  return [completedCount, allSubtasks.length];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
