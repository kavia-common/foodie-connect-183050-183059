import React, { useState } from 'react';
import Button from '../../components/common/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOTP } from '../../state/slices/auth';
import { Navigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function VerifyOTP() {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const { user, otpRequestedFor } = useSelector(s=>s.auth);
  if (user) return <Navigate to="/" replace />;
  return (
    <div className="card" style={{maxWidth:420, margin:'40px auto'}}>
      <h2>Verify OTP</h2>
      <p className="badge">OTP sent to {otpRequestedFor || 'your phone'}</p>
      <input className="input" placeholder="Enter OTP" value={otp} onChange={e=>setOtp(e.target.value)} />
      <Button style={{marginTop:12}} onClick={()=>dispatch(verifyOTP({ phone: otpRequestedFor, otp }))}>Verify</Button>
    </div>
  );
}
