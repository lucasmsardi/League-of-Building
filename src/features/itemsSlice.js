import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "selectedItem",
  initialState: {
    value: [],
  },
  reducers: {
    updateSelectedItem: (state, action) => {
      let filteredItems = []
      state.value.length > 0 ? filteredItems = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return
        }

      }) : filteredItems = [...filteredItems, action.payload]
      console.log(filteredItems);
      //state.value = [...state.value, action.payload];
    },
  },
});
export const { updateSelectedItem } = itemsSlice.actions;

export default itemsSlice.reducer;
