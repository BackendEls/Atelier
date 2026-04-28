"use client";

import { useEffect } from "react";

const defaultTitle = "Backend Atelier | Operational clarity for modern brands";
const awayTitle = "Your backend misses you";

export default function VisibilityTitle() {
  useEffect(() => {
    const handleVisibility = () => {
      document.title = document.hidden ? awayTitle : defaultTitle;
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      document.title = defaultTitle;
    };
  }, []);

  return null;
}
