import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api, Category } from "../../utils";

const initialState = [] as Category[];

export default createSlice({
  name: "categories",
  initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<Todo>) => {
    //   return [action.payload, ...state];
    // },
    // toggleTodoStatus: (state, action: PayloadAction<string>) => {
    //   const currentTodo = state.find(
    //     (todo: Todo) => todo.id === action.payload
    //   );
    //   if (currentTodo) currentTodo.completed = !currentTodo.completed;
    // },
    // editTodo: (state, action: PayloadAction<Todo>) => {
    //   const { id, ...updatedTodo } = action.payload;
    //   const index = state.findIndex((todo: Todo) => todo.id === id);
    //   if (index !== -1) {
    //     state[index] = { ...state[index], ...updatedTodo };
    //   }
    // },
    // removeTodo: (state, action: PayloadAction<string>) => {
    //   return state.filter((todo: Todo) => todo.id !== action.payload);
    // },
    // removeCompletedTasks: (state) => {
    //   return state.filter((todo: Todo) => !todo.completed);
    // },
    // sortTasks: (state) => {
    //   const sortedList = [...state].sort((a, b) => {
    //     if (a.completed === b.completed) {
    //       return 0;
    //     }
    //     if (a.completed) {
    //       return 1;
    //     }
    //     return -1;
    //   });
    //   return sortedList;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async () => {
    const res = await api.get("/categories");
    return res.data;
  }
);
