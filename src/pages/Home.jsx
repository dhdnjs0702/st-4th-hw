import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>home</h1>

      <Link to={`/detail/1`}>Detail 으로 이동</Link>
    </div>
  );
};
export default Home;
