import { Dashboard } from "pages/dashboard";
import { Intro } from "pages/intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
