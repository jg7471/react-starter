// src\pages\Home.jsx
import { useNavigate, Link } from "react-router-dom";

export function Home(){
  const navigate = useNavigate();
  
  const handleClick = () => {
	  navigate('/about',{ state: { name: "your-name" } });
  }

	/* home을 클릭하게 되면 About 페이지로 이동합니다. */
  return (
    <div>
	    <Link to="about">
		     home
	     </Link>
    </div>
  );
};
