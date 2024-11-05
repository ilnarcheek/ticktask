export interface IBlockInfo {
  id: string;
  title: string;
  isDone: boolean;
  taskCount: number;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  end_date: string;
  start_date: string;
}

// export interface ICurrentProject {}
