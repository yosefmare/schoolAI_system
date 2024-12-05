
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { studentLogin } from "./studentsAsyncTunks";
import { InitialState } from "./stutentSlice";
import Cookies from "js-cookie";

export const studentLoginExtraReducer = (builder: ActionReducerMapBuilder<InitialState>) => {
  builder
  .addCase(studentLogin.pending, (state) => {
    state.loading = true;
  })
  .addCase(studentLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload
      Cookies.set("token", action.payload.token);

    })
    .addCase(studentLogin.rejected, (state, action) => {
      state.error = 'failed';
      state.error = action.error.message;
    });
}