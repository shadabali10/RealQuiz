import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Quiz from "./Components/Quiz/Quiz";
import Result from "./Components/Quiz/Result";
import Login from "./Components/Login";
import Protected from "./Components/Protected";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/result" element={<Protected Cmp={Result}/>} />       
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Protected Cmp={Quiz} />} />
      </Routes>
    </Router>
  );
};

export default App;
