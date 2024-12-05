import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Teacher, TeacherResponse } from "./teacherSlice";

export interface LoginFormData {
  email?: string | null;
  password: string;
  role?: string;
}

export const teacherLogin = createAsyncThunk<Teacher, LoginFormData>(
  "teachers/login",
  async (formData, { rejectWithValue }) => {
    try {
      // API call
      const response = await axios.post<TeacherResponse>(
        "http://localhost:8000/api/teachers/login",
        formData
      );

      console.log(response.data);

      // Return the `teacher` object from the response
      return response.data.teacher;
    } catch (error: any) {
      console.error(error.response?.data || error.message);

      // Use rejectWithValue for error handling
      return rejectWithValue(error.response?.data || "Failed to login");
    }
  }
);
