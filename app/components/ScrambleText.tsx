"use client";

import { useEffect, useRef, useState } from "react";

type ScrambleTextProps = {
  text: string;
  className?: string;
  speed?: number;
  scrambleChars?: string;
  triggerOnHover?: boolean;
};

export default function ScrambleText({
  text,
  className,
  speed = 28,
  scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  triggerOnHover = true
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    setDisplay(text);
  }, [text]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const runScramble = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    let frame = 0;
    const total = Math.max(text.length * 3, 24);

    const tick = (time: number) => {
      if (time - lastTimeRef.current < speed) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      lastTimeRef.current = time;
      frame += 1;

      const settled = Math.floor((frame / total) * text.length);
      const next = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < settled) return text[index];
          const rand = Math.floor(Math.random() * scrambleChars.length);
          return scrambleChars[rand];
        })
        .join("");

      setDisplay(next);

      if (frame < total) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <span
      className={className}
      onMouseEnter={triggerOnHover ? runScramble : undefined}
      onFocus={triggerOnHover ? runScramble : undefined}
      aria-label={text}
    >
      {display}
    </span>
  );
}
