import React from 'react';
import Card from '../../components/common/Card.jsx';

// PUBLIC_INTERFACE
export default function Offers() {
  const offers = [{ id:1, title:'50% OFF on first order', code:'WELCOME50' }, { id:2, title:'Free delivery above ₹199', code:'FREEDEL' }];
  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      {offers.map(o=>(
        <Card key={o.id} style={{width:320}}>
          <strong>{o.title}</strong>
          <div className="space-between" style={{marginTop:8}}>
            <span className="badge">{o.code}</span>
            <button className="btn ghost">Apply</button>
          </div>
        </Card>
      ))}
    </div>
  );
}
