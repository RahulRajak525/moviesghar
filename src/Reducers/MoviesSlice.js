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
    Trailersloading: true,
    // languageLoading: false,
    // HeartWarmingLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrailersAction.fulfilled, (state, action) => {
      const response = action.payload.results;
      state.TrailersList = response;
      state.Trailersloading = false;
    });
    builder.addCase(getTrailersAction.pending, (state, action) => {
      state.Trailersloading = true;
    });
    builder.addCase(getHeartWarmingAction.fulfilled, (state, action) => {
      const response = action.payload.results;
      state.HeartWarmingList = response;
      // state.HeartWarmingLoading = false;
    });
    // builder.addCase(getHeartWarmingAction.pending, (state, action) => {
    //   state.HeartWarmingLoading = true;
    // });
    builder.addCase(getLanguageAction.fulfilled, (state, action) => {
      const response = action.payload;
      for (var i = 1; i <= 50; i++) {
        state.LanguagesList.push(response[i]);
      }
      // state.languageLoading = false;
    });
    // builder.addCase(getLanguageAction.pending, (state, action) => {
    //   state.languageLoading = true;
    // });
  },
});

export default moviesSlice.reducer;
export const moviesAction = moviesSlice.actions;
