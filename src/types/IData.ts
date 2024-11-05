export interface ITask {
  id: string;
  title: string;
  description: string;
  tags: string[];
  endDate: string;
  subtasks: ISubtask[] | null;
  isPrimary: boolean;
}

export interface ISubtask {
  isDone: boolean;
  description: string;
}

export interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
  color: string;
}

export interface IBlock {
  id: string;
  title: string;
  tasks: Record<string, ITask>;
  columns: Record<string, IColumn>;
  columnOrder: string[];
  homeIndex: number | null;
}

export interface IData {
  [key: string]: IBlock;
}
