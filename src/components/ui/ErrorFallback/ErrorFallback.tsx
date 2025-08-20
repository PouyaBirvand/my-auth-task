"use client";

import { useEffect } from "react";
import styles from "./ErrorFallback.module.scss";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorFallback({ error, reset }: Props) {
  useEffect(() => {
    console.error("⛔ Global Error:", error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>مشکلی پیش آمده!</h2>
        <p className={styles.message}>{error.message || "خطای ناشناخته رخ داد."}</p>
        <button className={styles.retryButton} onClick={reset}>
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}
