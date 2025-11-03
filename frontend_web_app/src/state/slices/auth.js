import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/apiClient';
import { notify } from '../../components/common/Toast.jsx';

export const requestOTP = createAsyncThunk('auth/requestOTP', async (phone) => {
  const res = await api.post('/auth/otp', { phone });
  return { phone, txnId: res.txnId || 'mock-txn' };
});

export const verifyOTP = createAsyncThunk('auth/verifyOTP', async ({ phone, otp }) => {
  const res = await api.post('/auth/verify', { phone, otp });
  return res.user;
});

export const completeProfile = createAsyncThunk('auth/completeProfile', async (data) => {
  const res = await api.post('/auth/profile', data);
  return res.user;
});

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, otpRequestedFor: null },
  reducers: {
    // PUBLIC_INTERFACE
    logout(state) { state.user = null; state.otpRequestedFor = null; notify('Logged out'); }
  },
  extraReducers: (b) => {
    b.addCase(requestOTP.fulfilled, (s, a) => { s.otpRequestedFor = a.payload.phone; notify('OTP sent'); })
     .addCase(verifyOTP.fulfilled, (s, a) => { s.user = a.payload; notify('Welcome!'); })
     .addCase(completeProfile.fulfilled, (s, a) => { s.user = a.payload; notify('Profile updated'); });
  }
});

export const { logout } = slice.actions;
export default slice.reducer;
