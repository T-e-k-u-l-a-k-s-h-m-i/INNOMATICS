// src/components/StudentForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent, updateStudent } from '../features/students/studentSlice';

const StudentForm = ({ student }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    if (student) {
      setFormData(student); // Prepopulate form with existing student details
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    // Simple validation logic
    return formData.name && formData.email && formData.age && formData.class && formData.address && formData.phone;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (student) {
        dispatch(updateStudent({ ...formData, id: student.id }));
      } else {
        dispatch(addStudent({ ...formData, id: Date.now() }));
      }
      alert('Student data submitted successfully!'); // Inform the user
      setFormData({ name: '', email: '', age: '', class: '', address: '', phone: '' }); // Reset form
    } else {
      alert('Please fill in all fields correctly.'); // Simple alert for validation
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required type="email" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required type="number" />
      <input name="class" value={formData.class} onChange={handleChange} placeholder="Class" required />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required type="tel" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
