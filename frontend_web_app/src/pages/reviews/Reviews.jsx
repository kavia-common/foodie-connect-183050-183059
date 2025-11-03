import React from 'react';
import Card from '../../components/common/Card.jsx';

// PUBLIC_INTERFACE
export default function Reviews() {
  const list = [{ id:1, item:'Paneer Tikka' }, { id:2, item:'Veg Biryani' }];
  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      {list.map(x=>(
        <Card key={x.id} style={{width:280}}>
          <strong>{x.item}</strong>
          <a className="btn ghost" href={`/rate/${x.id}`} style={{marginTop:8}}>Rate</a>
        </Card>
      ))}
    </div>
  );
}
