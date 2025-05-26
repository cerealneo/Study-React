import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.scss";
import { MainLayout } from "./layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
