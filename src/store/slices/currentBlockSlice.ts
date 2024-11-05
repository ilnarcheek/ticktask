import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlock } from "../../types/IData";

interface CurrentBlockState {
  currentBlock: IBlock;
  currentBlockId: string;
}

const initialState: CurrentBlockState = {
  currentBlockId: "block-1",
  currentBlock: {
    id: "block-1",
    title: "Производство секса для всех",
    tasks: {
      "task-1": {
        id: "task-1",
        title: "Implement authentication",
        description: "Add user authentication via OAuth2",
        tags: ["Backend", "High Priority"],
        endDate:
          "Sat Oct 26 2024 19:48:55 GMT+0300 (Москва, стандартное время)",
        subtasks: [
          { isDone: true, description: "Subtask 1" },
          { isDone: false, description: "Subtask 2" },
          { isDone: true, description: "Subtask 3" },
          { isDone: false, description: "Subtask 4" },
        ],
        isPrimary: true,
      },
      "task-2": {
        id: "task-2",
        title: "Design main page",
        description: "Create a responsive design for the main page",
        tags: ["Frontend", "Design"],
        endDate:
          "Sat Nov 01 2024 12:00:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [
          { isDone: false, description: "Set up grid layout" },
          { isDone: true, description: "Create mockup" },
        ],
        isPrimary: false,
      },
      "task-3": {
        id: "task-3",
        title: "Optimize database",
        description: "Reduce database response time by optimizing queries",
        tags: ["Backend", "Performance"],
        endDate:
          "Mon Nov 04 2024 09:30:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [
          { isDone: false, description: "Analyze slow queries" },
          { isDone: false, description: "Refactor indexing" },
        ],
        isPrimary: true,
      },
      "task-4": {
        id: "task-4",
        title: "Create user profile page",
        description: "Build and style the user profile page",
        tags: ["Frontend"],
        endDate:
          "Sun Nov 05 2024 16:00:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [{ isDone: false, description: "Create profile layout" }],
        isPrimary: false,
      },
      "task-5": {
        id: "task-5",
        title: "Set up CI/CD pipeline",
        description: "Automate deployments with a CI/CD pipeline",
        tags: ["DevOps"],
        endDate:
          "Wed Nov 06 2024 18:00:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [{ isDone: true, description: "Install CI tools" }],
        isPrimary: false,
      },
      "task-6": {
        id: "task-6",
        title: "Code review",
        description: "Review recent pull requests",
        tags: ["Review"],
        endDate:
          "Fri Nov 07 2024 10:00:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [{ isDone: false, description: "Review PR #123" }],
        isPrimary: false,
      },
      "task-7": {
        id: "task-7",
        title: "Test user flows",
        description: "Ensure user flows are working as expected",
        tags: ["QA", "Testing"],
        endDate:
          "Sat Nov 08 2024 15:00:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [{ isDone: false, description: "Test login flow" }],
        isPrimary: false,
      },
      "task-8": {
        id: "task-8",
        title: "Set up analytics",
        description: "Add analytics tracking for key metrics",
        tags: ["Backend", "Analytics"],
        endDate:
          "Tue Nov 10 2024 17:00:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [{ isDone: false, description: "Implement tracking events" }],
        isPrimary: false,
      },
      "task-9": {
        id: "task-9",
        title: "Fix bug #256",
        description: "Resolve issue with user session management",
        tags: ["Bugfix"],
        endDate:
          "Thu Nov 11 2024 12:00:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [{ isDone: false, description: "Identify cause" }],
        isPrimary: false,
      },
      "task-10": {
        id: "task-10",
        title: "Update documentation",
        description: "Add instructions for the new release",
        tags: ["Documentation"],
        endDate:
          "Fri Nov 12 2024 10:30:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [{ isDone: false, description: "Update README" }],
        isPrimary: false,
      },
      "task-11": {
        id: "task-11",
        title: "Create onboarding guide",
        description: "Prepare guide for new team members",
        tags: ["Onboarding"],
        endDate:
          "Mon Nov 13 2024 09:00:00 GMT+0300 (Москва, стандартное время)",
        subtasks: [{ isDone: false, description: "Create checklist" }],
        isPrimary: false,
      },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "На очереди",
        taskIds: ["task-1", "task-2", "task-4", "task-6"],
        color: "#53c536",
      },
      "column-2": {
        id: "column-2",
        title: "В работе",
        taskIds: ["task-3", "task-5", "task-7"],
        color: "#ffbf21",
      },
      "column-3": {
        id: "column-3",
        title: "Готово",
        taskIds: ["task-8", "task-9"],
        color: "#eff0f8",
      },
      "column-4": {
        id: "column-4",
        title: "На проверке",
        taskIds: ["task-10"],
        color: "#9599af",
      },
      "column-5": {
        id: "column-5",
        title: "Завершено",
        taskIds: ["task-11"],
        color: "#00b1f3",
      },
    },
    columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
    homeIndex: null,
  },
};

export const currentBlockSlice = createSlice({
  name: "currentBlock",
  initialState,
  reducers: {
    moveCard: (state, action: PayloadAction<IBlock>) => {
      state.currentBlock = action.payload;
    },
  },
});

export const { moveCard } = currentBlockSlice.actions;

export default currentBlockSlice;
