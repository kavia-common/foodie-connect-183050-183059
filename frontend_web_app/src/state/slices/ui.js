import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ui',
  initialState: { notifications: [] },
  reducers: {
    // PUBLIC_INTERFACE
    pushNotification(state, action) { state.notifications.push(action.payload); },
    // PUBLIC_INTERFACE
    clearNotifications(state) { state.notifications = []; }
  }
});

export const { pushNotification, clearNotifications } = slice.actions;
export default slice.reducer;
