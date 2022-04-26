import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
