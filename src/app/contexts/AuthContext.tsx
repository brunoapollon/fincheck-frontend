import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { localStorageKeys } from '../config/localStoregeKeys';
import { useQuery } from '@tanstack/react-query';
import { usersService } from '../services/usersService';
import { toast } from 'react-hot-toast';
import { LauchScreen } from '../../view/components/LauchScreen';

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  logout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [hasToken, setHasToken] = useState<boolean>(() => {
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!token;
  });

  const { isError, isFetching, isSuccess, remove } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: usersService.me,
    enabled: hasToken,
    staleTime: Infinity
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setHasToken(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove();

    setHasToken(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!');
      logout();
    }
  }, [isError, logout]);


  return <AuthContext.Provider value={{
    signedIn: isSuccess && hasToken,
    signin,
    logout
  }}>
    <LauchScreen isLoading={isFetching} />;
    {!isFetching&& children}
  </AuthContext.Provider>;
}
