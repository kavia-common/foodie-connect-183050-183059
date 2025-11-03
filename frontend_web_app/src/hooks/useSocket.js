import React from 'react';
import { subscribe } from '../services/socketClient';

// PUBLIC_INTERFACE
export default function useSocket(event, handler) {
  React.useEffect(()=> {
    return subscribe(event, handler);
  }, [event, handler]);
}
