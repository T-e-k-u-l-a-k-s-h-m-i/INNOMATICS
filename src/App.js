// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterStudent from './pages/RegisterStudent';
import ListStudents from './pages/ListStudents';
import StudentDetailsPage from './pages/StudentDetailsPage';
import Dashboard from './components/Dashboard'; // Make sure this component exists
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/students" element={<ListStudents />} />
          <Route path="/students/:id" element={<StudentDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
