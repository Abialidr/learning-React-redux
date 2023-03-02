import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'Counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    changeByState: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, changeByState } = counterSlice.actions;
