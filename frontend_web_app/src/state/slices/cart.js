import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    // PUBLIC_INTERFACE
    addItem(state, action) {
      const it = action.payload;
      const existing = state.items.find(x=>x.id===it.id);
      if (existing) existing.qty += it.qty || 1;
      else state.items.push({ ...it, qty: it.qty || 1 });
    },
    // PUBLIC_INTERFACE
    removeItem(state, action) {
      const id = action.payload;
      const existing = state.items.find(x=>x.id===id);
      if (existing) existing.qty -= 1;
      state.items = state.items.filter(x=>x.qty>0);
    },
    // PUBLIC_INTERFACE
    clearCart(state) { state.items = []; }
  }
});

export const { addItem, removeItem, clearCart } = slice.actions;
export default slice.reducer;
