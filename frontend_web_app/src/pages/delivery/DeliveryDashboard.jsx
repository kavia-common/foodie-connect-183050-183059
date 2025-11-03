import React from 'react';
import Card from '../../components/common/Card.jsx';

// PUBLIC_INTERFACE
export default function DeliveryDashboard() {
  const jobs = [{ id: 101, from: 'Spice Hub', to: 'Sector 21', eta: '12 mins' }];
  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      {jobs.map(j=>(
        <Card key={j.id} style={{width:320}}>
          <strong>Job #{j.id}</strong>
          <p className="badge">Pickup: {j.from}</p>
          <p className="badge">Drop: {j.to}</p>
          <p className="badge">ETA: {j.eta}</p>
        </Card>
      ))}
    </div>
  );
}
