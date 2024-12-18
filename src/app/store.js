// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../features/students/studentSlice';

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;
