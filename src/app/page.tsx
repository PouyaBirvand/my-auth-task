'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';

export default function HomePage() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    } else {
      router.replace('/auth');
    }
  }, [user, router]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div>در حال بارگذاری...</div>
    </div>
  );
}
