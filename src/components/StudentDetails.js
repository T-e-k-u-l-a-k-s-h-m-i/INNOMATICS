// src/pages/StudentDetailsPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

const StudentDetailsPage = () => {
  const { id } = useParams();
  const students = useSelector((state) => state.students.list);
  const student = students.find(student => student.id === parseInt(id, 10)); // Assuming id is a number

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/students'); // Redirect to student list on close
  };

  return (
    <div>
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;Edit Student Details</h2>
      {student ? (
        <StudentForm student={student} onClose={handleClose} />
      ) : (
        <p>Student not found.</p>
      )}
    </div>
  );
};

export default StudentDetailsPage;
