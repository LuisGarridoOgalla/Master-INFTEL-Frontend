import React, { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListApp } from "./list";
import { DetailPage } from "./detail";
import { InputProvider } from "./user-filter.context";

export const App = () => {
  return (
    <StrictMode>
      <InputProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/list" element={<ListApp />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </InputProvider>
    </StrictMode>
  );
};
