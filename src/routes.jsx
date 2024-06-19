import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPages from "./pages/repositoriesPages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="repositories" element={<RepositoriesPages />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
