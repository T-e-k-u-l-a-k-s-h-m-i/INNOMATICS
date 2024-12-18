// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterStudent from './pages/RegisterStudent';
import ListStudents from './pages/ListStudents';
import StudentDetailsPage from './pages/StudentDetailsPage';
import Dashboard from './components/Dashboard/Dashboard'; // Make sure this component exists
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/INNOMATICS/dashboard" element={<Dashboard />} />
          <Route path="/INNOMATICS/register" element={<RegisterStudent />} />
          <Route path="/INNOMATICS/students" element={<ListStudents />} />
          <Route path="/INNOMATICS/students/:id" element={<StudentDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
