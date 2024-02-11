import { createSlice } from "@reduxjs/toolkit";

export const championSlice = createSlice({
  name: "selectedChampion",
  initialState: {
    value: {},
  },
  reducers: {
    updateSelectedChampion: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updateSelectedChampion } = championSlice.actions;

export default championSlice.reducer;

