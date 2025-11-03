import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function Tabs({ tabs, onChange }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex" style={{gap:8}}>
      {tabs.map((t, idx)=>(
        <button key={t} className={`btn ${active===idx?'':'ghost'}`} onClick={()=>{ setActive(idx); onChange?.(idx); }}>{t}</button>
      ))}
    </div>
  );
}
