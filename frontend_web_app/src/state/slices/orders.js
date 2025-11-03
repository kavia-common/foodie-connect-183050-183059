import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'orders',
  initialState: { current: null, list: [] },
  reducers: {
    // PUBLIC_INTERFACE
    setCurrent(state, action){ state.current = action.payload; },
    // PUBLIC_INTERFACE
    addOrder(state, action){ state.list.unshift(action.payload); }
  }
});

export const { setCurrent, addOrder } = slice.actions;
export default slice.reducer;
