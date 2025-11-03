import React from 'react';
import SearchBar from './SearchBar.jsx';
import NotificationBell from '../notifications/NotificationBell.jsx';
import Avatar from './Avatar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../state/slices/auth';

// PUBLIC_INTERFACE
export default function Navbar() {
  const user = useSelector(s=>s.auth.user);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex" style={{gap:12, alignItems:'center'}}>
        <strong>🍔 Foodie Connect</strong>
        <SearchBar />
      </div>
      <div className="flex" style={{gap:12, alignItems:'center'}}>
        <NotificationBell />
        {user ? (
          <>
            <span className="badge">Hi, {user.name || user.phone}</span>
            <button className="btn ghost" onClick={()=>dispatch(logout())}>Logout</button>
          </>
        ) : (
          <a className="btn ghost" href="/auth/login">Login</a>
        )}
        <Avatar name={user?.name} />
      </div>
    </>
  );
}
