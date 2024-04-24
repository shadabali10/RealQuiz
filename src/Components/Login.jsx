import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./TaskReducer";
import { useNavigate } from "react-router-dom";

// Define data outside the component
let data = {};

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


export default Login;


export { data };
