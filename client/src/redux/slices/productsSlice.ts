import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product, api } from "../../utils";

const initialState = [] as Product[];

export default createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (_state, action) => {
      return action.payload;
    });

    builder.addCase(getMoreProducts.fulfilled, (state, action) => {
      return [...state, ...action.payload];
    });

    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (param: string = "") => {
    const res = await api.get("/products" + param);
    return res.data;
  }
);

export const getMoreProducts = createAsyncThunk(
  "products/getMoreProducts",
  async (page: number) => {
    const res = await api.get("/products?page=" + page);
    return res.data;
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: string | undefined) => {
    const res = await api.get("/products/" + id);
    return res.data;
  }
);
