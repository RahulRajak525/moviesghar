import { createSlice } from "@reduxjs/toolkit";
import {
  getHeartWarmingAction,
  getLanguageAction,
  getTrailersAction,
} from "./asyncReducer";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    TrailersList: [],
    HeartWarmingList: [],
    LanguagesList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrailersAction.fulfilled, (state, action) => {
      const response = action.payload.results;
      state.TrailersList = response;
    });
    builder.addCase(getHeartWarmingAction.fulfilled, (state, action) => {
      const response = action.payload.results;
      state.HeartWarmingList = response;
    });
    builder.addCase(getLanguageAction.fulfilled, (state, action) => {
      const response = action.payload;
      for (var i = 1; i <= 50; i++) {
        state.LanguagesList.push(response[i]);
      }
    });
  },
});

export default moviesSlice.reducer;
export const moviesAction = moviesSlice.actions;
