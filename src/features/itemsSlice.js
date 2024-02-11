import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "selectedItem",
  initialState: {
    value: [],
  },
  reducers: {
    updateSelectedItem: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});
export const { updateSelectedItem } = itemsSlice.actions;

export default itemsSlice.reducer;
