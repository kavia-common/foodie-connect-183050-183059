import React from 'react';

// PUBLIC_INTERFACE
export default function useDebounce(value, delay=400) {
  const [v, setV] = React.useState(value);
  React.useEffect(()=> {
    const id = setTimeout(()=> setV(value), delay);
    return ()=> clearTimeout(id);
  }, [value, delay]);
  return v;
}
