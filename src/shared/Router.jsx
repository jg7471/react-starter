// src\shared\Router.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Works } from "../pages/Works";
import { Work } from "../pages/Work";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works />} />
        {/* 아래 코드를 추가해주세요. 👇 */}
        <Route path="works/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}
