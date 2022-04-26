import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../Routes/Router";

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};
