import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "../Reducers/MoviesSlice";

export const store = configureStore({
  reducer: {
    movies: MoviesSlice,
  },
});
