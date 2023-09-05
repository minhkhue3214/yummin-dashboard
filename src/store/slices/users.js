import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: true,
  isClicked:false,
};

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getAllUserRequest: () => {
      // request user
    },
    updateActiveMenu: (state, action) => {
      // console.log("🚀 ~ file: users.js:19 ~ action:", action)
      // update active menu
      state.activeMenu = action.payload;

    },
    updateActiveNavbar: (state, action) => {
      console.log("🚀 ~ file: users.js:19 ~ action:", action)
      // update active menu
      state.isClicked = action.payload;

    },
  }
});

export const {
  getAllUserRequest,
  updateActiveMenu,
  updateActiveNavbar
} = users.actions;

export default users.reducer;
