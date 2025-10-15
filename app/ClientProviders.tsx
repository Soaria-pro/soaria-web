"use client";

import { useEffect } from "react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Initialize Flowbite only after hydration
  useEffect(() => {
    import("flowbite");
  }, []);

  return <>{children}</>;
}