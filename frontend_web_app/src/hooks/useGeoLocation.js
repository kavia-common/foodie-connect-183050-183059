import React from 'react';

// PUBLIC_INTERFACE
export default function useGeoLocation() {
  const [pos, setPos] = React.useState(null);
  React.useEffect(()=> {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((p)=> setPos({ lat:p.coords.latitude, lng:p.coords.longitude }));
  },[]);
  return pos;
}
