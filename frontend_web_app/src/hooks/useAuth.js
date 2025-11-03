import { useSelector } from 'react-redux';

// PUBLIC_INTERFACE
export default function useAuth() {
  const user = useSelector(s=>s.auth.user);
  return { user, isAuthenticated: !!user, role: user?.role };
}
