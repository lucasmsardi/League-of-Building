import { createSlice } from "@reduxjs/toolkit";

export const mathSlice = createSlice({
  name: "itemsMath",
  initialState: {
    allItems: [],
    math: 0,
    champAS: 0
  },
  reducers: {
    calculateItemsAS: (state, action) => {
      let allSelectedItems = state.allItems;
      let exists;
      for (let i = 0; i < allSelectedItems.length; i++) {
        if (allSelectedItems[i].id === action.payload.id) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        state.allItems.push(action.payload);
      }

      let math = allSelectedItems.reduce(
        (accumulator, item) => accumulator + item.AS,
        0
      );

      state.allItems = allSelectedItems;
      state.math = state.champAS + (state.champAS * math);
    },

    calculateAS: (state, action) => {
      state.champAS = action.payload
    }

  },
});
export const { calculateItemsAS, calculateAS } = mathSlice.actions;

export default mathSlice.reducer;
