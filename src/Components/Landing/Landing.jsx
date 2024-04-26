import React, { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navbarHeight = 100;
  const navigate = useNavigate();
  localStorage.clear();

  return (
    <div
      className="min-w-screen flex justify-center items-center flex-col"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <div className="w-1/2 max-md:w-full">
        <h1>Welcome to really awesome Aureal quiz experience</h1>
        <p>
          Just answer the few questions and we'll provide you with not one, but
          two recommendations for your listening pleasure.
        </p>
      </div>
      <div className="h-40 w-40 rounded-full bg-blue-300 flex justify-center items-center mt-10">
        <div className="h-30 w-30 rounded-full bg-blue-100 flex justify-center items-center">
          <button
            className="h-20 w-20 bg-blue-100 rounded-full flex justify-center items-center"
            onClick={() => navigate("/login")}
          >
            <ArrowForwardIosIcon className="move-button" />
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Landing;
