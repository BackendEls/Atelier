"use client";

import { useEffect } from "react";

const defaultTitle = "Backend Atelier";
const awayTitle = "Still building clarity?";

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
