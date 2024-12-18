// src/features/students/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    list: [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com', class: '10th Grade' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', class: '11th Grade' },
      { id: 3, name: 'Emily Johnson', email: 'emilyj@example.com', class: '12th Grade' },
      { id: 4, name: 'Michael Brown', email: 'michaelb@example.com', class: '10th Grade' },
    ], // Default data
  },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.list.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter(student => student.id !== action.payload);
    },
    setStudents: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addStudent, updateStudent, deleteStudent, setStudents } = studentSlice.actions;
export default studentSlice.reducer;
