'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { User, AuthContextType } from '@/types/user';
import { storage } from '@/lib/storage';
import { getRandomUser } from '@/services/api';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load user from localStorage on mount
    const savedUser = storage.getUser();
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await getRandomUser();
      const userData = response.results[0];

      setUser(userData);
      storage.setUser(userData);
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    storage.removeUser();
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
