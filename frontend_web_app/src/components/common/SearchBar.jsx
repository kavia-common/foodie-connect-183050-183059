import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useDispatch } from 'react-redux';
import { searchRestaurants } from '../../state/slices/restaurants';

// PUBLIC_INTERFACE
export default function SearchBar() {
  const [q, setQ] = useState('');
  const debounced = useDebounce(q, 400);
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(searchRestaurants(debounced));
  }, [debounced, dispatch]);

  return (
    <input className="input" placeholder="Search restaurants or dishes..." value={q} onChange={e=>setQ(e.target.value)} />
  );
}
