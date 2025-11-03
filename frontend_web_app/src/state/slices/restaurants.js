import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/apiClient';

export const fetchRestaurants = createAsyncThunk('restaurants/fetch', async () => {
  const res = await api.get('/restaurants');
  return res.restaurants || [];
});

// PUBLIC_INTERFACE
export const searchRestaurants = createAsyncThunk('restaurants/search', async (q) => {
  const res = await api.get('/restaurants', { q });
  return res.restaurants || [];
});

const slice = createSlice({
  name: 'restaurants',
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchRestaurants.pending, (s)=>{ s.loading = true; })
     .addCase(fetchRestaurants.fulfilled, (s,a)=>{ s.loading = false; s.list = a.payload; })
     .addCase(searchRestaurants.fulfilled, (s,a)=>{ s.list = a.payload; });
  }
});

export default slice.reducer;
