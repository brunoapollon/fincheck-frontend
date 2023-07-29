import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  isPrivate?: boolean
}

export function AuthGuard({isPrivate = false }: AuthGuardProps) {
  const signedInd = false;
  if (!signedInd && isPrivate) {
    return <Navigate to='/login' replace />;
  }

  if (signedInd && !isPrivate) {
    return <Navigate to='/' replace />;

  }
  return <Outlet />;
}
