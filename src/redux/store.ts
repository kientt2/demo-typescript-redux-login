import { configureStore } from "@reduxjs/toolkit";
import { mainSlice, userSlice } from "./slice";

const reducers = {
  main: mainSlice.reducer,
  user: userSlice.reducer,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
