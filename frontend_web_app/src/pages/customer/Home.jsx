import React from 'react';
import Card from '../../components/common/Card.jsx';
import Button from '../../components/common/Button.jsx';
import Rating from '../../components/common/Rating.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurants } from '../../state/slices/restaurants';
import { addItem } from '../../state/slices/cart';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Home() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(s=>s.restaurants);

  React.useEffect(()=>{ dispatch(fetchRestaurants()); }, [dispatch]);

  return (
    <div className="flex" style={{gap:16, flexWrap:'wrap'}}>
      {list.map(r => (
        <Card key={r.id} style={{width:320}}>
          <div className="space-between" style={{marginBottom:8}}>
            <strong>{r.name}</strong>
            <Rating value={r.rating} />
          </div>
          <p className="badge">{r.cuisines?.join(', ')}</p>
          <div className="space-between" style={{marginTop:8}}>
            <Link className="btn ghost" to={`/restaurant/${r.id}`}>View</Link>
            <Button onClick={()=>dispatch(addItem({ id:`${r.id}-1`, name:`${r.name} Special`, price:199, qty:1 }))}>Add Special</Button>
          </div>
        </Card>
      ))}
      {loading && <div className="badge">Loading...</div>}
    </div>
  );
}
