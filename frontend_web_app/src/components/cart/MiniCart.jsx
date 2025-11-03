import React from 'react';
import { useSelector } from 'react-redux';

// PUBLIC_INTERFACE
export default function MiniCart() {
  const items = useSelector(s=>s.cart.items);
  const qty = items.reduce((a,b)=>a+b.qty,0);
  const total = items.reduce((sum,i)=> sum + i.price * i.qty, 0);
  return (
    <a className="mini-cart-fab" href="/checkout" aria-label="Open cart">
      <span>🛒 {qty}</span>
      <strong>₹{total.toFixed(0)}</strong>
    </a>
  );
}
