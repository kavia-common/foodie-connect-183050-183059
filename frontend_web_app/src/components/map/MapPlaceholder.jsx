import React from 'react';

// PUBLIC_INTERFACE
export default function MapPlaceholder({ height=240, children }) {
  /** Placeholder map area until provider is wired */
  return (
    <div className="card" style={{height, background:'linear-gradient(135deg, #eef2ff, #fef3c7)'}}>
      <div className="center" style={{height:'100%', color:'#6B7280'}}>🗺️ Map placeholder {children}</div>
    </div>
  );
}
