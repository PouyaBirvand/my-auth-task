'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';
import { Loading } from '@/components/ui/Loading/Loading';

export default function HomePage() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) return;
    if (user) {
      router.replace('/dashboard');
    } else {
      router.replace('/auth');
    }
  }, [user, router]);

  return <Loading text="در حال بررسی وضعیت کاربر..." />;
}
