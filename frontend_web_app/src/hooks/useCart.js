import { useSelector } from 'react-redux';

// PUBLIC_INTERFACE
export default function useCart() {
  const items = useSelector(s=>s.cart.items);
  const qty = items.reduce((a,b)=>a+b.qty,0);
  const total = items.reduce((sum,i)=> sum + i.price * i.qty, 0);
  return { items, qty, total };
}
