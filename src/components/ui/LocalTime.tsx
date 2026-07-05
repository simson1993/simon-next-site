"use client";

import { useEffect, useState } from "react";

function formatTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/Berlin",
  })
    .format(new Date())
    .toLowerCase();
}

export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime());
    const interval = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span suppressHydrationWarning>
      Hamburg, Germany{time ? ` ${time}.` : "."}
    </span>
  );
}
