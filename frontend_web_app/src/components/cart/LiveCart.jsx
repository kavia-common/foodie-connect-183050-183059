import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, addItem, clearCart } from '../../state/slices/cart';
import Button from '../common/Button.jsx';

// PUBLIC_INTERFACE
export default function LiveCart() {
  const { items } = useSelector(s=>s.cart);
  const dispatch = useDispatch();
  const total = items.reduce((sum,i)=> sum + i.price * i.qty, 0);
  return (
    <div className="card">
      <div className="space-between">
        <strong>Cart</strong>
        <button className="btn ghost" onClick={()=>dispatch(clearCart())}>Clear</button>
      </div>
      <ul>
        {items.map(i=>(
          <li key={i.id} className="space-between" style={{padding:'8px 0'}}>
            <div>{i.name} × {i.qty}</div>
            <div className="flex" style={{gap:8}}>
              <Button variant="ghost" onClick={()=>dispatch(removeItem(i.id))}>-</Button>
              <Button variant="ghost" onClick={()=>dispatch(addItem({...i, qty:1}))}>+</Button>
            </div>
          </li>
        ))}
      </ul>
      <hr className="hr" />
      <div className="space-between">
        <strong>Total</strong>
        <strong>₹{total.toFixed(2)}</strong>
      </div>
      <a className="btn" href="/checkout" style={{marginTop:12}}>Checkout</a>
    </div>
  );
}
