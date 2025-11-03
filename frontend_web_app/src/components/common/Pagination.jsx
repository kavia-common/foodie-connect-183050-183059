import React from 'react';

// PUBLIC_INTERFACE
export default function Pagination({ page, totalPages, onChange }) {
  return (
    <div className="center">
      <button className="btn ghost" onClick={()=>onChange(Math.max(1,page-1))} disabled={page<=1}>Prev</button>
      <span className="badge">{page}/{totalPages}</span>
      <button className="btn ghost" onClick={()=>onChange(Math.min(totalPages,page+1))} disabled={page>=totalPages}>Next</button>
    </div>
  );
}
