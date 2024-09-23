import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./index.css";
import Courses from "./components/Courses/Courses";
import CodeEditor from "./components/CodeEditor/Editor";

function App() {
  return (
    <Router>
      <div className="w-full h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/editor" element={<CodeEditor/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
