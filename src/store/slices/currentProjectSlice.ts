import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProjectData } from "../../api/apiProject";
// import { IBlock } from "../../types/IData";

// interface CurrentProjectState {
//   currentBlock: IBlock;
//   currentBlockId: string;
// }

const initialState = {
  project: {
    id: "8c2fe65b-8a72-4728-bf76-be51e830e1ad",
    title: "",
    description: "",
    end_date: "",
    start_date: "",
  },
  loading: false,
};

export const fetchProjectData = createAsyncThunk(
  "projects/fetchProjectData",
  async (projectId: string) => {
    await getProjectData(projectId);
  }
);

export const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProjectData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjectData.fulfilled, (state, action) => {
        state.loading = false;
      });
  },
});

export default currentProjectSlice;
