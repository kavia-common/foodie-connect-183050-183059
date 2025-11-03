import React from 'react';

// PUBLIC_INTERFACE
export default function Card({ children, className, ...rest }) {
  /** Surface card wrapper */
  return <div className={`card ${className||''}`} {...rest}>{children}</div>;
}
