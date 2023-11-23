import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars } from "./catalogOperations";

const initialState = {
  catalog: null,
  isLoading: false,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalog = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const catalogReduser = catalogSlice.reducer;
