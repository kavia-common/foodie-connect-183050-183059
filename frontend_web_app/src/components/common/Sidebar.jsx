import React from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Sidebar() {
  return (
    <div className="sidebar-inner">
      <div className="space-between" style={{marginBottom:12}}>
        <strong>Foodie Connect</strong>
        <NavLink to="/" className="badge">Home</NavLink>
      </div>
      <NavLink to="/" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Discover</NavLink>
      <NavLink to="/orders" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Orders</NavLink>
      <NavLink to="/offers" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Offers</NavLink>
      <NavLink to="/referrals" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Referrals</NavLink>
      <div style={{flex:1}} />
      <NavLink to="/settings" className={({isActive}) => `menu-link ${isActive?'active':''}`}>Settings</NavLink>
    </div>
  );
}
