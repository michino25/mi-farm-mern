// import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { BlankLayout, MainLayout } from "./layouts";
import { Cart, Detail, Home, Login, Register, Search, Test } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlankLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:id" element={<Search type="category" />} />
          <Route path="/search/:id" element={<Search type="search" />} />
        </Route>
      </Routes>
    </>
  );
}
