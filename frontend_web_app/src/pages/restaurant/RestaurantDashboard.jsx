import React from 'react';
import Card from '../../components/common/Card.jsx';

// PUBLIC_INTERFACE
export default function RestaurantDashboard() {
  const metrics = [{ label:'Orders today', value:24 }, { label:'Revenue', value:'₹12,450' }, { label:'Rating', value:'4.3' }];
  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      {metrics.map(m=>(
        <Card key={m.label} style={{width:240}}>
          <div className="flex" style={{flexDirection:'column', gap:6}}>
            <span className="badge">{m.label}</span>
            <strong style={{fontSize:22}}>{m.value}</strong>
          </div>
        </Card>
      ))}
    </div>
  );
}
