import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import RegisterPage from "@/pages/RegisterPage";

const router = () => {
  const PrivateRoute = () => {
    return localStorage.getItem("accessToken") ? <MainPage /> : <Navigate to="/login" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
