import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "selectedItem",
  initialState: {
    value: [],
  },
  reducers: {
    updateSelectedItem: (state, action) => {
      state.value = state.value === 0 ? [...state.value, action.payload] : state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { updateSelectedItem } = itemsSlice.actions;

export default itemsSlice.reducer;
