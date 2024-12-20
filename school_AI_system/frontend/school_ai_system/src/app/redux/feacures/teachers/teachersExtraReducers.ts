import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { addStudent, teacherLogin } from "./teachersAsyncTunks";
import { InitialState } from "./teacherSlice";
import Cookies from "js-cookie";

export const teacherLoginExtraReducer = (builder: ActionReducerMapBuilder<InitialState>) => {
  builder
  .addCase(teacherLogin.pending, (state) => {
    state.loading = true;
  })
  .addCase(teacherLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload
      Cookies.set("token", action.payload.token);

    })
    .addCase(teacherLogin.rejected, (state, action) => {
      state.error = 'failed';
      state.error = action.error.message;
    });
}
export const addStidentExtraReducer = (builder: ActionReducerMapBuilder<InitialState>) => {
  builder
  .addCase(addStudent.pending, (state) => {
    state.loading = true;
  })
  .addCase(addStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload

    })
    .addCase(addStudent.rejected, (state, action) => {
      state.error = 'failed';
      state.error = action.error.message;
    });
}