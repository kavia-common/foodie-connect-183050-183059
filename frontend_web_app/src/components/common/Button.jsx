import React from 'react';
import cn from 'classnames';

// PUBLIC_INTERFACE
export default function Button({ children, onClick, type='button', variant='primary', className, ...rest }) {
  /** Generic button with variants: primary, secondary, ghost. */
  return (
    <button type={type} onClick={onClick} className={cn('btn', { secondary: variant==='secondary', ghost: variant==='ghost' }, className)} {...rest}>
      {children}
    </button>
  );
}
