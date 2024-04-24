import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "./Login";

const Protected = (props) => {
  const { Cmp } = props;
  const navigate = useNavigate();

  const check = localStorage.getItem("check");

  useEffect(() => {
    if (check === "true") {
      navigate("/result");
    } else if (data.email && data.password) {
      navigate("/quiz");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;
