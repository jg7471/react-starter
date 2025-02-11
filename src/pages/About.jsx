// src\pages\About.jsx
import { useLocation } from "react-router-dom";

export function About() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      about
    </div>
  );
};
