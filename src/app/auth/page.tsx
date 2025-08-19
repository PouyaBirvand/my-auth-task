'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/components/forms/LoginForm/LoginForm';
import { useAuthContext } from '@/context/AuthContext';
import styles from './page.module.scss';

export default function AuthPage() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user, router]);

  if (user) {
    return null; // or loading spinner
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.authContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
