import React from 'react';
import Button from '../../components/common/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { initiatePayment } from '../../services/payment';

// PUBLIC_INTERFACE
export default function Payment() {
  const navigate = useNavigate();
  const pay = async () => {
    const ok = await initiatePayment({ amount: 29900, currency: 'INR', orderId: `ord_${Date.now()}` });
    if (ok) navigate(`/track/${Date.now()}`);
  };
  return (
    <div className="card" style={{maxWidth:520}}>
      <strong>Payment</strong>
      <p className="badge">Provider-agnostic placeholder flow</p>
      <Button onClick={pay}>Pay ₹299</Button>
    </div>
  );
}
