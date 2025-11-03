import React, { useState } from 'react';
import Button from '../../components/common/Button.jsx';

// PUBLIC_INTERFACE
export default function RateOrder() {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  return (
    <div className="card" style={{maxWidth:520}}>
      <strong>Rate your order</strong>
      <input className="input" type="number" min="1" max="5" value={rating} onChange={e=>setRating(+e.target.value)} />
      <textarea className="input" rows="4" placeholder="Write a review..." value={review} onChange={e=>setReview(e.target.value)} />
      <Button style={{marginTop:8}}>Submit</Button>
    </div>
  );
}
