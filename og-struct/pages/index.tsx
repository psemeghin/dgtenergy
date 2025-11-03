// src/pages/index.tsx

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function IndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return null;
}