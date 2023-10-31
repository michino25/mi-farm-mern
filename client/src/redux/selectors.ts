import type { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state: RootState) => state.products;
export const selectCarts = (state: RootState) => state.carts;
export const selectCategories = (state: RootState) => state.categories;
export const selectUserInfo = (state: RootState) => state.users.user;
export const selectUserStatus = (state: RootState) => state.users.status;

export const selectProductById = (id: string | undefined) =>
  createSelector([selectProducts], (products) =>
    products.find((product) => product._id === id)
  );

export const selectCategoryByCode = (code: string | undefined) =>
  createSelector([selectCategories], (categories) =>
    categories.find((category) => category.code === code)
  );
