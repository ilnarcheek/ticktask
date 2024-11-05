import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import currentBlockSlice from "./slices/currentBlockSlice";
import homeIndexSlice from "./slices/homeIndexSlice";
import { userProjectsSlice } from "./slices/userProjectsSlice";
import currentProjectSlice from "./slices/currentProjectSlice";

export const store = configureStore({
  reducer: {
    currentBlock: currentBlockSlice.reducer,
    homeIndex: homeIndexSlice.reducer,
    userProjects: userProjectsSlice.reducer,
    auth: authSlice.reducer,
    currentProject: currentProjectSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
