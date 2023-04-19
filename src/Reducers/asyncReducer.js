import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiMoviesServices } from "../ApiServices/apiMoviesServices";

export const getTrailersAction = createAsyncThunk(
  "getTrailersAction",
  async () => {
    const response = await ApiMoviesServices.getTrandingTrailer();
    return response;
  }
);
export const getHeartWarmingAction = createAsyncThunk(
  "getHeartWarmingAction",
  async () => {
    const response = await ApiMoviesServices.getHeartWarming();
    return response;
  }
);
export const getLanguageAction = createAsyncThunk(
  "getLanguageAction",
  async () => {
    const response = await ApiMoviesServices.getLanguages();
    return response;
  }
);
