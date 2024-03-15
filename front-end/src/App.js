import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import SignUp from "./pages/UserSignUp";
import BlogEditor from "./pages/WriteBlogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<BlogEditor />} />
      </Routes>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
=======
ReactDOM.render(<App />, document.getElementById("root"));
