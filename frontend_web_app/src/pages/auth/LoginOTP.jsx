import React, { useState } from 'react';
import Button from '../../components/common/Button.jsx';
import { useDispatch } from 'react-redux';
import { requestOTP } from '../../state/slices/auth';

// PUBLIC_INTERFACE
export default function LoginOTP() {
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="card" style={{maxWidth:420, margin:'40px auto'}}>
      <h2>Login</h2>
      <p className="badge">Enter your phone to receive OTP</p>
      <input className="input" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
      <Button style={{marginTop:12}} onClick={()=>dispatch(requestOTP(phone))}>Send OTP</Button>
    </div>
  );
}
