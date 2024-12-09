import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import ProtectedRoute from "./components/ProtectedRoute";


  function App() {
    return (
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Login />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/add-course" element={<AddCourse />} />
        </Routes>
      </Router>
    );
  }

export default App;
