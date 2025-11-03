import React from 'react';

// PUBLIC_INTERFACE
export default function Modal({ open, onClose, title, children, footer }) {
  /** Simple modal */
  if (!open) return null;
  return (
    <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,.25)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50}}>
      <div className="card" style={{width:'min(560px, 92vw)'}}>
        <div className="space-between" style={{marginBottom:8}}>
          <strong>{title}</strong>
          <button className="btn ghost" onClick={onClose}>✕</button>
        </div>
        <div>{children}</div>
        {footer ? <div style={{marginTop:12}}>{footer}</div> : null}
      </div>
    </div>
  );
}
