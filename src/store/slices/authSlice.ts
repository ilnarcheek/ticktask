import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { signInUser, signOutUser } from "../../api/apiAuth";
import { IUser } from "../../types/IUser";

interface UserSliceData {
  user: IUser;
  loading: boolean;
}

interface SignInArgs {
  email: string;
  password: string;
  navigate: NavigateFunction;
}

const UserInitialState = {
  userId: "",
  profileId: "",
  avatar: "",
  username: "",
};

const initialState: UserSliceData = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : UserInitialState,
  loading: false,
};

export const signInAndGetProfileId = createAsyncThunk(
  "auth/signIn",
  async ({ email, password, navigate }: SignInArgs) => {
    const data = await signInUser(email, password);
    navigate("/dashboard");
    return data as IUser;
  }
);

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    const { error } = await signOutUser();
    if (error) return rejectWithValue(error.message);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInAndGetProfileId.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInAndGetProfileId.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = UserInitialState;
      });
  },
});

export default authSlice;
