import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogEditor from "./pages/WriteBlogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogEditor />} />
      </Routes>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));