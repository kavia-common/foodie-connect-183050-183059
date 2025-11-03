import React from 'react';

// PUBLIC_INTERFACE
export default function Loader({ text = 'Loading...' }) {
  return (
    <div className="center" style={{padding:20, color:'#6B7280'}}>
      <span className="badge">⏳ {text}</span>
    </div>
  );
}
