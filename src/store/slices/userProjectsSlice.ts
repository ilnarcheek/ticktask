import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProjects } from "../../api/apiProject";
import { IProject } from "../../types/IProject";

interface userProjectsState {
  userProjects: IProject[] | [];
  loading: boolean;
  error: string;
}

const initialState: userProjectsState = {
  userProjects: [],
  loading: false,
  error: "",
};

export const fetchUserProjects = createAsyncThunk(
  "projects/fetchUserProjects",
  async (profileId: string) => {
    return await getUserProjects(profileId);
  }
);

export const userProjectsSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProjects.fulfilled, (state, action) => {
        state.userProjects = action.payload;
        state.loading = false;
      });
  },
});

export default userProjectsSlice;
