import React, { useEffect, useState } from 'react';

const listeners = new Set();
export function notify(message, type='info') {
  listeners.forEach(l => l({ message, type, id: Date.now() }));
}

// PUBLIC_INTERFACE
export default function ToastContainer() {
  /** Global toast container. Use notify('Message') to show. */
  const [items, setItems] = useState([]);
  useEffect(() => {
    const handler = (n) => {
      setItems(prev => [...prev, n]);
      setTimeout(() => {
        setItems(prev => prev.filter(i => i.id !== n.id));
      }, 3000);
    };
    listeners.add(handler);
    return () => listeners.delete(handler);
  }, []);
  return (
    <div style={{position:'fixed', top:16, right:16, zIndex:60, display:'flex', flexDirection:'column', gap:8}}>
      {items.map(n => (
        <div key={n.id} className="badge" style={{background:'#fff', borderColor:'#E5E7EB'}}>
          {n.message}
        </div>
      ))}
    </div>
  );
}
