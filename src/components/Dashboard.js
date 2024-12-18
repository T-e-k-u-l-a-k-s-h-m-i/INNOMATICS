// src/components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const students = useSelector((state) => state.students.list);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Student Management Portal</h1>
      <p style={{ color: 'white', textAlign: 'center' }}>
        Welcome to the Student Management Dashboard, your centralized hub for efficiently managing student records and enhancing educational outcomes. Here, you can easily register new students, view detailed profiles, and track progress over time. With an intuitive interface, you can quickly access the student list, update information, and delete records as needed. Our system is designed to streamline administrative tasks, allowing educators to focus more on teaching and student engagement. Stay organized and informed as you nurture the next generation of learners!
      </p>
      <div className="summary" style={{ textAlign: 'center' }}>
        <h2>Student Summary</h2>
        <p>Total Students: {students.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;
