import React from 'react';

// PUBLIC_INTERFACE
export default function Rating({ value=0 }) {
  const full = Math.round(value);
  return <div aria-label={`Rating ${value}/5`}>{[1,2,3,4,5].map(i => <span key={i}>{i<=full ? '⭐' : '☆'}</span>)}</div>;
}
