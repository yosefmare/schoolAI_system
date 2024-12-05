import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Student, StudentResponse } from "./stutentSlice";
import { LoginFormData } from "../teachers/teachersAsyncTunks";

// Define the async thunk
export const studentLogin = createAsyncThunk<Student, LoginFormData>(
  "students/login",
  async (formData, { rejectWithValue }) => {
    try {
      // Correct type usage for axios.post
      const response = await axios.post<StudentResponse>(
        "http://localhost:8000/api/students/login",
        formData
      );

      console.log(response.data);

      // Return the student object from the response
      return response.data.student;
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      return rejectWithValue(error.response?.data || "Failed to login");
    }
  }
);
