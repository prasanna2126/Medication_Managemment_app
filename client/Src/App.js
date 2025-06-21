import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import PatientDashboard from "./components/Dashboard/PatientDashboard";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <PatientDashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
