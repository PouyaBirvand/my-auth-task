"use client";

import ErrorFallback from "@/components/ui/ErrorFallback/ErrorFallback";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return <ErrorFallback error={error} reset={reset} />;
}
