import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: "Guest",
  reducers: {
    setUser: (state, value) => {
      state = value.payload;
      // console.log(state)
      // console.log(value);
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;
export { mainSlice, userSlice };
