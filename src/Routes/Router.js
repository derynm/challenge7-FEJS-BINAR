import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { HomePage } from "../Pages/HomePage/HomePage";
import HomePesan from "../Pages/HomePesan/HomePesan";
import { LoginPage } from "../Pages/LoginPage/LoginPage";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/rental" element={<HomePesan />} />
      </Routes>
    </div>
  );
};
