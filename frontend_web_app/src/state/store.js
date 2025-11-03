import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth';
import cart from './slices/cart';
import restaurants from './slices/restaurants';
import orders from './slices/orders';
import ui from './slices/ui';

// PUBLIC_INTERFACE
export const store = configureStore({
  reducer: { auth, cart, restaurants, orders, ui }
});
