import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, UserInfo } from "../../utils";

export const STORAGE_KEY = "MIFARM";

const getLocalStorageData = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  // console.log(stored === "{}");
  // console.log(stored);

  return stored && stored !== "{}"
    ? JSON.parse(stored)
    : { status: "", user: {} as UserInfo };
};

const initialState = getLocalStorageData();

export default createSlice({
  name: "users",
  initialState,
  reducers: {
    userLogout: (state) => {
      state = { status: "", user: {} };
      localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
      /* eslint-disable  @typescript-eslint/no-unused-vars */
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      // console.log(action.payload);
      state = { status: "logged", user: action.payload };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return state;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      /* eslint-disable */
      const err: any = action.payload;
      // console.log(err.response.data);
      state = { status: err.response.data, user: {} };
      return state;
    });

    builder.addCase(userRegister.fulfilled, (state) => {
      // console.log(action.payload);
      state = { status: "registered", user: {} };
      return state;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      /* eslint-disable */
      const err: any = action.payload;
      // console.log(err.response.data);
      state = { status: err.response.data, user: {} };
      return state;
    });
  },
});

export const userLogin = createAsyncThunk(
  "users/userLogin",
  async ({ username, password }: UserInfo, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", { username, password });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userRegister = createAsyncThunk(
  "users/userRegister",
  async ({ username, password, email }: UserInfo, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/register", {
        username,
        password,
        email,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
