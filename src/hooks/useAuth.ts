import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';

export const useAuth = () => {
  const { user, login, logout, isLoading } = useAuthContext();
  const router = useRouter();

  const handleLogin = async (phoneNumber: string) => {
    await login(phoneNumber);
    router.push('/dashboard');
  };

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  return {
    user,
    login: handleLogin,
    logout: handleLogout,
    isLoading,
  };
};
