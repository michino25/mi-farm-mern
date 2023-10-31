import { Cart } from "./../../utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils";

const initialState = [] as Cart[];

export default createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarts.fulfilled, (_state, action) => {
      return action.payload;
    });

    builder.addCase(addCart.fulfilled, (_state, action) => {
      return action.payload;
    });
    builder.addCase(updateCart.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const getCarts = createAsyncThunk(
  "carts/getCarts",
  async (user: string) => {
    const res = await api.get("/carts/" + user);
    return res.data;
  }
);

export const addCart = createAsyncThunk(
  "carts/addCart",
  async ({ user, productId, quantity }: Cart) => {
    const res = await api.post("/carts", {
      user,
      product: productId,
      quantity,
    });

    return res.data;
  }
);

export const updateCart = createAsyncThunk(
  "carts/updateCart",
  async ({ user, productId, quantity }: Cart) => {
    const res = await api.put("/carts", {
      user,
      product: productId,
      quantity,
    });

    return res.data;
  }
);
