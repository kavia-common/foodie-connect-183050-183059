import React, { useState } from 'react';
import Button from '../../components/common/Button.jsx';
import { useDispatch } from 'react-redux';
import { completeProfile } from '../../state/slices/auth';

// PUBLIC_INTERFACE
export default function ProfileSetup() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="card" style={{maxWidth:520, margin:'40px auto'}}>
      <h2>Profile setup</h2>
      <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
      <Button style={{marginTop:12}} onClick={()=>dispatch(completeProfile({ name }))}>Save</Button>
    </div>
  );
}
