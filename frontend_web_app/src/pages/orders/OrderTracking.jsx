import React from 'react';
import MapPlaceholder from '../../components/map/MapPlaceholder.jsx';

// PUBLIC_INTERFACE
export default function OrderTracking() {
  const timeline = ['Order placed','Restaurant accepted','Food prepared','Picked up','Out for delivery','Delivered'];
  const [step, setStep] = React.useState(2);
  React.useEffect(()=>{
    const id = setInterval(()=> setStep(s => Math.min(s+1, timeline.length-1)), 4000);
    return ()=> clearInterval(id);
  },[]);
  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      <div style={{flex:'2 1 520px'}}><MapPlaceholder height={320} /></div>
      <div style={{flex:'1 1 320px'}}>
        <div className="card">
          <strong>Status</strong>
          <ol>
            {timeline.map((t, i)=>(
              <li key={t} className="flex" style={{gap:8, alignItems:'center', marginTop:8}}>
                <span>{i<=step ? '✅' : '⏳'}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
