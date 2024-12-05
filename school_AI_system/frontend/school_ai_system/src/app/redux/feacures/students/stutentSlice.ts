import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { studentLoginExtraReducer } from "./studentsExtraReducers";

export type Student = {
  _id: string;
  name: string;
  role: string;
  studentClass: string;
  grade: number;
  token: string;
};

export type StudentResponse = {
  message: string;
  student: Student;
};

export type InitialState = {
  value: Student;
  error: string | null | undefined;
  loading: boolean;
};

const initialState: InitialState = {
  value: {
    _id: "",
    name: "",
    role: "",
    studentClass: "",
    grade: 0, // Default grade is 0
    token: "",
  },
  error: null,
  loading: false,
};



export const student = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    studentLoginExtraReducer(builder);
  },
});

export default student.reducer;
