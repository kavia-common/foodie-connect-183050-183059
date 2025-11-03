import React from 'react';
import Card from '../../components/common/Card.jsx';

// PUBLIC_INTERFACE
export default function OrderHistory() {
  const orders = [{ id:1, total:299, date:'Today' }, { id:2, total:189, date:'Yesterday' }];
  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      {orders.map(o=>(
        <Card key={o.id} style={{width:280}}>
          <div className="space-between"><strong>Order #{o.id}</strong><span>₹{o.total}</span></div>
          <p className="badge">{o.date}</p>
          <a className="btn ghost" href={`/track/${o.id}`}>Track</a>
        </Card>
      ))}
    </div>
  );
}
