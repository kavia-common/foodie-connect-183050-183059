import React from 'react';
import { useSelector } from 'react-redux';

// PUBLIC_INTERFACE
export default function NotificationBell() {
  const count = useSelector(s=>s.ui.notifications.length);
  return (
    <div className="badge" role="button" title="Notifications">
      🔔 {count}
    </div>
  );
}
