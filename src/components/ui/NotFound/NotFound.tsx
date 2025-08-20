"use client";

import { useRouter } from "next/navigation";
import styles from "./NotFound.module.scss";
import { Button } from "../Button/Button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>صفحه مورد نظر یافت نشد!</p>
        <Button onClick={() => router.push("/")}>
          بازگشت به صفحه اصلی
        </Button>
      </div>
    </div>
  );
}
