import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface homeIndexState {
  homeIndex: number | null;
}

const initialState: homeIndexState = {
  homeIndex: null,
};

const homeIndexSlice = createSlice({
  name: "homeIndex",
  initialState,
  reducers: {
    setHomeIndex: (state, action: PayloadAction<number>) => {
      state.homeIndex = action.payload;
    },
    resetHomeIndex: (state) => {
      state.homeIndex = null;
    },
  },
});

export const { setHomeIndex, resetHomeIndex } = homeIndexSlice.actions;

export default homeIndexSlice;
