import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { teacherLoginExtraReducer } from "./teachersExtraReducers";

export type Teacher = {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
};

export type TeacherResponse = {
  message: string;
  teacher: Teacher;
};

export type InitialState = {
  value: Teacher;
  error: string | null| undefined;
  loading: boolean;
};

const initialState: InitialState = {
  value: {
    _id: "",
    name: "",
    email: "",
    role: "",
    token: "",
  },
  error: null,
  loading: false,
};


export const teacher = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    teacherLoginExtraReducer(builder);
  },
});

export default teacher.reducer;
