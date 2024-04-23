import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { addTask } from "./TaskReducer";
import loginData from "./TaskReducer"; 


const Login = () => {
    const tasks = useSelector((state) => state.tasks);
const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  
     dispatch(addTask({ email,password }))

    //  console.log(loginData);
   
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
