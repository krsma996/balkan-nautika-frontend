import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../features/homepage/HomePage";
import { UserLogin } from "../features/login/components/UserLogin";
import { UserRegister } from "../features/login/components/UserRegister";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
};