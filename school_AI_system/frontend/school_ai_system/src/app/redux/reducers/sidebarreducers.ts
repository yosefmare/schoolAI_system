import { createSlice } from '@reduxjs/toolkit';

type SideBarInitialStateType = {
  isOpen: boolean;
}

const initialState: SideBarInitialStateType = {
  isOpen: false,
}

const sidebBarComponentSlice = createSlice({
  name: "sidebarComponent",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen =!state.isOpen;
    }
  }
})

export const { toggleSidebar } = sidebBarComponentSlice.actions;

export default sidebBarComponentSlice.reducer;