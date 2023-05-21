import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Task from "./pages/Task";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState(null);

  const saveData = (data) => {
    setFormData(data);
  };

  const clearData = () => {
    if (window.confirm("Are you sure you want to clear the data?")) {
      setFormData(null);
    }
  };

  useEffect(() => {
    if (formData) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/task" className="nav-link">
              Task
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
       <Route path="/" element={<Home clearData={clearData}/>}>Home</Route>
       <Route path="/contact" element={<Contact saveData={saveData}/>}>Home</Route>
       <Route path="/task" element={<Task/>}>Home</Route>
      </Routes>
    </div>
  );
};

export default App;
