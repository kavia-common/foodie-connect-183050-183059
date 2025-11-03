import React from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar.jsx';
import Navbar from '../components/common/Navbar.jsx';
import MiniCart from '../components/cart/MiniCart.jsx';
import Home from '../pages/customer/Home.jsx';
import RestaurantDetails from '../pages/customer/RestaurantDetails.jsx';
import LoginOTP from '../pages/auth/LoginOTP.jsx';
import VerifyOTP from '../pages/auth/VerifyOTP.jsx';
import ProfileSetup from '../pages/auth/ProfileSetup.jsx';
import Checkout from '../pages/orders/Checkout.jsx';
import Payment from '../pages/orders/Payment.jsx';
import OrderTracking from '../pages/orders/OrderTracking.jsx';
import OrderHistory from '../pages/orders/OrderHistory.jsx';
import Offers from '../pages/offers/Offers.jsx';
import Referrals from '../pages/referrals/Referrals.jsx';
import Reviews from '../pages/reviews/Reviews.jsx';
import RateOrder from '../pages/reviews/RateOrder.jsx';
import RestaurantDashboard from '../pages/restaurant/RestaurantDashboard.jsx';
import DeliveryDashboard from '../pages/delivery/DeliveryDashboard.jsx';
import Settings from '../pages/settings/Settings.jsx';
import NotFound from '../pages/NotFound.jsx';
import { useSelector } from 'react-redux';

// Simple auth guard using Redux state
function RequireAuth({ children, roles }) {
  const user = useSelector((s) => s.auth.user);
  const role = user?.role;
  if (!user) return <Navigate to="/auth/login" replace />;
  if (roles && !roles.includes(role)) return <Navigate to="/" replace />;
  return children;
}

// PUBLIC_INTERFACE
export function AppRouter() {
  return (
    <>
      <aside className="sidebar surface">
        <div className="sidebar-inner">
          <div className="space-between" style={{marginBottom:12}}>
            <strong>Foodie Connect</strong>
            <NavLink to="/" className="badge">Home</NavLink>
          </div>
          <NavLink to="/" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Discover</NavLink>
          <NavLink to="/orders" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Orders</NavLink>
          <NavLink to="/offers" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Offers</NavLink>
          <NavLink to="/referrals" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Referrals</NavLink>
          <hr className="hr" />
          <NavLink to="/dashboard/restaurant" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Restaurant</NavLink>
          <NavLink to="/dashboard/delivery" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Delivery</NavLink>
          <div style={{flex:1}} />
          <NavLink to="/settings" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Settings</NavLink>
        </div>
      </aside>
      <header className="navbar">
        <div className="navbar-inner">
          <Navbar />
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />

          <Route path="/auth/login" element={<LoginOTP />} />
          <Route path="/auth/verify" element={<VerifyOTP />} />
          <Route path="/auth/profile-setup" element={<ProfileSetup />} />

          <Route path="/checkout" element={
            <RequireAuth roles={['customer']}><Checkout /></RequireAuth>
          } />
          <Route path="/payment" element={
            <RequireAuth roles={['customer']}><Payment /></RequireAuth>
          } />
          <Route path="/track/:orderId" element={
            <RequireAuth roles={['customer','delivery']}><OrderTracking /></RequireAuth>
          } />
          <Route path="/orders" element={
            <RequireAuth roles={['customer']}><OrderHistory /></RequireAuth>
          } />

          <Route path="/reviews" element={<RequireAuth roles={['customer']}><Reviews /></RequireAuth>} />
          <Route path="/rate/:orderId" element={<RequireAuth roles={['customer']}><RateOrder /></RequireAuth>} />

          <Route path="/offers" element={<Offers />} />
          <Route path="/referrals" element={<Referrals />} />

          <Route path="/dashboard/restaurant" element={<RequireAuth roles={['restaurant']}><RestaurantDashboard /></RequireAuth>} />
          <Route path="/dashboard/delivery" element={<RequireAuth roles={['delivery']}><DeliveryDashboard /></RequireAuth>} />

          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <MiniCart />
    </>
  );
}
