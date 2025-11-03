import React from 'react';
import LiveCart from '../../components/cart/LiveCart.jsx';
import Button from '../../components/common/Button.jsx';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      <div style={{flex:'1 1 420px'}}><LiveCart /></div>
      <div style={{flex:'1 1 320px'}}>
        <div className="card">
          <strong>Delivery Address</strong>
          <input className="input" placeholder="Address" style={{marginTop:8}} />
          <Button style={{marginTop:8}} onClick={()=>navigate('/payment')}>Continue to Payment</Button>
        </div>
      </div>
    </div>
  );
}
