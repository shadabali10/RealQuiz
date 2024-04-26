import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./TaskReducer";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

let data = {};
const navbarHeight = 150;

const Login = () => {
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ email, password }));

    data = { email, password };

    console.log(data);
    navigate("/quiz");

    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="min-w-screen flex justify-center items-center flex-row flex-wrap"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <div className="flex justify-space-between items-center h-full w-1/2  max-md:hidden">
        <img src={loginImage} style={{ width: "500px", height: "500px" }}></img>
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="border-2 rounded-lg p-5 max-md:ml-0"
        >
          <h3>Login Account</h3>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          ></Box>
          <br />
          <div className="mb-5">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-10"
              required
            />
          </div>
          <div className="mb-5">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <box />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Login;

export { data };
