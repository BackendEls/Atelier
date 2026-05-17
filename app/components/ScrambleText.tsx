"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type ScrambleTextProps = {
  text: string;
  className?: string;
  speed?: number;
  triggerOnHover?: boolean;
};

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({
  text,
  className,
  speed = 30,
  triggerOnHover = true,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [width, setWidth] = useState<number>();
  const ref = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  const longest = useMemo(() => text, [text]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.offsetWidth);
  }, [longest]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const scramble = () => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }

          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(scrambled);

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplay(text);
      }

      iteration += 1 / 3;
    }, speed);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(text);
  };

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={() => triggerOnHover && scramble()}
      onMouseLeave={() => triggerOnHover && reset()}
      style={{
        display: "inline-block",
        width: width ? `${width}px` : "auto",
        whiteSpace: "nowrap",
      }}
    >
      {display}
    </span>
  );
}
