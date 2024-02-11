import { createSlice } from "@reduxjs/toolkit";

export const mathSlice = createSlice({
  name: "itemsMath",
  initialState: {
    value: [],
  },
  reducers: {
    calculateItemsAS: (state, action) => {
      
        let math;
        math = action.payload.reduce((accumulator, item) =>  accumulator + item.AS, 0);
        console.log(math)
        state.value = math
    }
  },
});
export const { calculateItemsAS } = mathSlice.actions;

export default mathSlice.reducer;