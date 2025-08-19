'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import styles from './page.module.scss';
import Image from 'next/image';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/auth');
    }
  }, [user, router]);

  if (!user) {
    return null; // or loading spinner
  }

  return (
    <div className={styles.dashboardPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>داشبورد</h1>
            <Button variant="secondary" onClick={logout} size="small">
              خروج
            </Button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.welcomeCard}>
            <div className={styles.userAvatar}>
              <Image
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className={styles.avatarImage}
                width={500}
                height={300}
              />
            </div>

            <div className={styles.welcomeContent}>
              <h2 className={styles.welcomeTitle}>
                خوش آمدید، {user.name.first} {user.name.last}!
              </h2>
              <p className={styles.welcomeSubtitle}>به داشبورد خود خوش آمدید</p>
            </div>
          </div>

          <div className={styles.userInfo}>
            <h3 className={styles.infoTitle}>اطلاعات کاربری</h3>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>نام کامل:</span>
                <span className={styles.infoValue}>
                  {user.name.title} {user.name.first} {user.name.last}
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>ایمیل:</span>
                <span className={styles.infoValue}>{user.email}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>تلفن:</span>
                <span className={styles.infoValue}>{user.phone}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>موبایل:</span>
                <span className={styles.infoValue}>{user.cell}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>شهر:</span>
                <span className={styles.infoValue}>
                  {user.location.city}, {user.location.state}
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>سن:</span>
                <span className={styles.infoValue}>{user.dob.age} سال</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
