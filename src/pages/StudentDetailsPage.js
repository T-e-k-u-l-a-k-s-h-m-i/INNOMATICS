// src/pages/StudentDetailsPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StudentDetails from '../components/StudentDetails';

const StudentDetailsPage = () => {
  const { id } = useParams();
  const student = useSelector((state) => state.students.list.find(s => s.id === Number(id)));

  return (
    <div>
      <h1>&nbsp;&nbsp;&nbsp;Student Details</h1>
      <StudentDetails student={student} />
    </div>
  );
};

export default StudentDetailsPage;
