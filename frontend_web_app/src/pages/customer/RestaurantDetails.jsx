import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/common/Card.jsx';
import Button from '../../components/common/Button.jsx';
import { useDispatch } from 'react-redux';
import { addItem } from '../../state/slices/cart';

// PUBLIC_INTERFACE
export default function RestaurantDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const menu = [
    { id:`${id}-m1`, name:'Paneer Tikka', price:199 },
    { id:`${id}-m2`, name:'Veg Biryani', price:179 },
    { id:`${id}-m3`, name:'Butter Naan', price:49 },
  ];
  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      {menu.map(m=>(
        <Card key={m.id} style={{width:280}}>
          <strong>{m.name}</strong>
          <div className="space-between" style={{marginTop:8}}>
            <span>₹{m.price}</span>
            <Button onClick={()=>dispatch(addItem({ ...m, qty:1 }))}>Add</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
