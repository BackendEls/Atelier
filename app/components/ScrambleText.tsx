"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type ScrambleTextProps = {
  text: string;
  className?: string;
  speed?: number;
  triggerOnHover?: boolean;
};

export default function ScrambleText({ text, className, speed = 42, triggerOnHover = true }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [lockedWidth, setLockedWidth] = useState<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const measureRef = useRef<HTMLSpanElement | null>(null);

  const scrambleChars = useMemo(() => {
    const letters = text.replace(/\s+/g, "").split("");
    return letters.length ? letters : [" "];
  }, [text]);

  useEffect(() => {
    setDisplay(text);
  }, [text]);

  useLayoutEffect(() => {
    if (!measureRef.current) return;
    const { width } = measureRef.current.getBoundingClientRect();
    setLockedWidth(width);
  }, [text, className]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const runScramble = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    let frame = 0;
    const total = Math.max(text.length * 4, 28);

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
          if (char === " " || /[^\p{L}\p{N}]/u.test(char)) return char;
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
    <>
      <span
        className={className}
        onMouseEnter={triggerOnHover ? runScramble : undefined}
        onFocus={triggerOnHover ? runScramble : undefined}
        aria-label={text}
        style={{
          display: "inline-block",
          width: lockedWidth ? `${lockedWidth}px` : undefined,
          minWidth: lockedWidth ? `${lockedWidth}px` : undefined,
          whiteSpace: "pre",
          fontKerning: "none",
          fontVariantLigatures: "none"
        }}
      >
        {display}
      </span>
      <span
        ref={measureRef}
        className={className}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          whiteSpace: "pre"
        }}
      >
        {text}
      </span>
    </>
  );
}
