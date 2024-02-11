import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "selectedItem",
  initialState: {
    value: [],
  },
  reducers: {
    updateSelectedItem: (state, action) => {
      let allSelectedItems = state.value;
      let exists;
      for (let i = 0; i < allSelectedItems.length; i++) {
        if (allSelectedItems[i].id === action.payload.id) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        state.value.push(action.payload);
      }

      state.value = allSelectedItems;
    },
    removeSelectedItem: (state, action) => {
      let allSelectedItems = state.value;
      allSelectedItems = allSelectedItems.filter((item) => item.id != action.payload.id);
      state.value = allSelectedItems;
    }
  },
});
export const { updateSelectedItem, removeSelectedItem } = itemsSlice.actions;

export default itemsSlice.reducer;
