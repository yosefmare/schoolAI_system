import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Teacher, TeacherResponse } from "./teacherSlice";
import { getCookie } from "@/utils/getCooies";

export interface LoginFormData {
  email?: string | null;
  password: string;
  role?: string;
}
export interface AddStudentFormData{
name: string;
password: string;
studentClass: string;
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

export const addStudent = createAsyncThunk<Teacher, AddStudentFormData>(
  "teachers/login",
  async (formData, { rejectWithValue }) => {
    try {
      // API call
      const token = getCookie('token');
            const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const response = await axios.post<TeacherResponse>(
        "http://localhost:8000/api/teachers/addStudent",
        formData,
        { headers}
      );

      console.log(response.data);
      return response.data.teacher;
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      return rejectWithValue(error.response?.data || "Failed to login");
    }
  }
);
