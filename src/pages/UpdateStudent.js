// src/pages/UpdateStudent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentById, updateStudent } from '../features/students/studentSlice';
import StudentForm from '../components/StudentForm';

const UpdateStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const student = useSelector((state) =>
    state.students.list.find((s) => s.id === parseInt(id))
  );

  useEffect(() => {
    if (!student) {
      dispatch(getStudentById(id));
    }
  }, [id, dispatch, student]);

  const handleUpdate = (updatedStudent) => {
    dispatch(updateStudent({ ...updatedStudent, id: parseInt(id) }));
    navigate('/students'); // Redirect to the student list after update
  };

  return (
    <div>
      <h2>Update Student</h2>
      {student ? (
        <StudentForm student={student} onClose={() => navigate('/students')} onSubmit={handleUpdate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdateStudent;
