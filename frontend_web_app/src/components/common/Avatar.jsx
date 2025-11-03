import React from 'react';

// PUBLIC_INTERFACE
export default function Avatar({ name='', size=32 }) {
  const initials = name ? name.split(' ').map(s=>s[0]).join('').slice(0,2).toUpperCase() : 'U';
  return (
    <div style={{width:size, height:size, borderRadius:999, background:'#E5E7EB'}} className="center">
      <span style={{fontSize:size*0.4}}>{initials}</span>
    </div>
  );
}
