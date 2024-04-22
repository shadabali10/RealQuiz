import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Quiz from "./Components/Quiz/Quiz";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </Router>
  );
};

export default App;
